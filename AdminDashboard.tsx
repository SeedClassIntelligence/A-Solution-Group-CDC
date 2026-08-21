
import React, { useState, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Logo } from './Logo';
import { backendService, SystemSettings, FormSubmission } from './backendService';
import { 
  ShieldCheck, 
  CreditCard, 
  Inbox, 
  Users2, 
  Trash2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  BarChart3,
  Search,
  ChevronRight,
  Settings,
  Eye,
  ArrowLeft,
  FileText,
  Download,
  Image as ImageIcon,
  Palette,
  Tags,
  Plus,
  X
} from 'lucide-react';

type AdminDashboardProps = {
  userRole: 'admin' | 'partner' | 'user';
  onNavigateHome: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ userRole, onNavigateHome, theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'stripe' | 'inbox' | 'network' | 'brand' | 'taxonomy' | 'billing'>('overview');
  const [settings, setSettings] = useState<SystemSettings>(backendService.getSettings());
  const [submissions, setSubmissions] = useState<FormSubmission[]>(backendService.getSubmissions());
  const [taxonomy, setTaxonomy] = useState(backendService.getTaxonomy());
  const [billingPlans, setBillingPlans] = useState(backendService.getBillingPlans());
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [newTaxonomy, setNewTaxonomy] = useState({ category: '', term: '', definition: '' });
  const [newPlan, setNewPlan] = useState({ name: '', price: 0, interval: 'month' as const, features: [] as string[] });
  const [featureInput, setFeatureInput] = useState('');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    backendService.saveSettings(settings);
    alert('System settings updated successfully.');
  };

  const handleUpdateStatus = (id: string, status: FormSubmission['status']) => {
    backendService.updateSubmissionStatus(id, status);
    setSubmissions(backendService.getSubmissions());
  };

  const handleAddTaxonomy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaxonomy.term || !newTaxonomy.definition) return;
    backendService.saveTaxonomyEntry(newTaxonomy);
    setTaxonomy(backendService.getTaxonomy());
    setNewTaxonomy({ category: '', term: '', definition: '' });
  };

  const handleDeleteTaxonomy = (id: string) => {
    backendService.deleteTaxonomyEntry(id);
    setTaxonomy(backendService.getTaxonomy());
  };

  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlan.name) return;
    backendService.saveBillingPlan(newPlan);
    setBillingPlans(backendService.getBillingPlans());
    setNewPlan({ name: '', price: 0, interval: 'month', features: [] });
  };

  const handleDeletePlan = (id: string) => {
    backendService.deleteBillingPlan(id);
    setBillingPlans(backendService.getBillingPlans());
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this record?')) {
      backendService.deleteSubmission(id);
      setSubmissions(backendService.getSubmissions());
      if (selectedSubmission?.id === id) setSelectedSubmission(null);
    }
  };

  // Utility to export the logo as PNG
  const downloadLogoAsPng = (size: 'sm' | 'md' | 'lg' | 'xl', variant: 'default' | 'contrast') => {
    setIsExporting(true);
    
    // Size mapping for pixel dimensions
    const dims = { sm: 128, md: 256, lg: 512, xl: 1024 };
    const canvasSize = dims[size];
    
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define colors manually to ensure they match Logo.tsx exactly outside React context
    const colors = variant === 'contrast' 
      ? { outer: 'rgba(255,255,255,0.2)', inner: '#FFFFFF', bg: 'rgba(255,255,255,0.1)', letter: '#FFFFFF', canvasBg: '#1B4332' }
      : { outer: 'rgba(27, 67, 50, 0.3)', inner: '#1B4332', bg: 'rgba(27, 67, 50, 0.05)', letter: '#1B4332', canvasBg: 'transparent' };

    // Create SVG Blob
    const svgString = `
      <svg width="${canvasSize}" height="${canvasSize}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="96" height="96" rx="4" stroke="${colors.outer}" stroke-width="1" fill="none" />
        <rect x="18" y="18" width="64" height="64" rx="2" fill="${colors.bg}" stroke="${colors.inner}" stroke-width="6" />
        <text x="50" y="50" dominant-baseline="central" text-anchor="middle" fill="${colors.letter}" font-family="serif" font-weight="900" font-size="50" dy="4">A</text>
      </svg>
    `;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // Clear canvas with background if contrast variant
      if (variant === 'contrast') {
        ctx.fillStyle = colors.canvasBg;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
      }
      
      ctx.drawImage(img, 0, 0);
      
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `ASG_Logo_${size}_${variant}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
      setIsExporting(false);
    };

    img.src = url;
  };

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    assessments: submissions.filter(s => s.type === 'assessment').length,
    inquiries: submissions.filter(s => s.type === 'contact').length,
    applications: submissions.filter(s => s.type === 'solutionologist').length,
  };

  return (
    <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Header mode="landing" onNavigateHome={onNavigateHome} userRole={userRole} theme={theme} toggleTheme={toggleTheme} currentPage="admin" />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white uppercase tracking-tight">System Management</h1>
            <p className="text-sm opacity-60 font-bold uppercase tracking-widest mt-2">Operational Controls & Intake Monitoring</p>
          </div>
          <button onClick={onNavigateHome} className="flex items-center gap-2 text-seed-text-primary dark:text-white font-black uppercase text-xs tracking-widest hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Exit to Site
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'overview' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <BarChart3 size={18} /> Overview
            </button>
            <button onClick={() => setActiveTab('brand')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'brand' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <Palette size={18} /> Brand Assets
            </button>
            <button onClick={() => setActiveTab('stripe')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'stripe' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <CreditCard size={18} /> Stripe Settings
            </button>
            <button onClick={() => setActiveTab('inbox')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'inbox' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <Inbox size={18} /> Intake Inbox {stats.new > 0 && <span className="ml-auto bg-seed-accent-green text-seed-text-primary px-2 py-0.5 rounded-full text-[10px]">{stats.new}</span>}
            </button>
            <button onClick={() => setActiveTab('network')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'network' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <Users2 size={18} /> Network Apps
            </button>
            <button onClick={() => setActiveTab('taxonomy')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'taxonomy' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
              <Tags size={18} /> Taxonomy
            </button>
            {userRole === 'admin' && (
              <button onClick={() => setActiveTab('billing')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'billing' ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5'}`}>
                <CreditCard size={18} /> Billing Plans
              </button>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* BRAND ASSETS TAB */}
            {activeTab === 'brand' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl border border-seed-text-primary/5 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-seed-accent-green/10 text-seed-accent-green rounded-xl">
                      <ImageIcon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold">Brand Kit & Logo Export</h3>
                      <p className="text-sm opacity-60">Generate high-resolution PNGs of the ASG Logo architecture.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Default Variant */}
                    <div className="space-y-6">
                      <h4 className="font-black text-xs uppercase tracking-widest opacity-60">Default Variant</h4>
                      <div className="p-12 bg-seed-bg dark:bg-seed-bg-dark rounded-2xl border border-seed-text-primary/5 flex items-center justify-center">
                         <Logo size="xl" showText={false} variant="default" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <button 
                           onClick={() => downloadLogoAsPng('sm', 'default')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-3 bg-seed-text-primary/5 hover:bg-seed-accent-green/10 rounded-lg text-xs font-bold transition-all"
                         >
                            <span>Small (128x128)</span> <Download size={14} />
                         </button>
                         <button 
                           onClick={() => downloadLogoAsPng('md', 'default')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-3 bg-seed-text-primary/5 hover:bg-seed-accent-green/10 rounded-lg text-xs font-bold transition-all"
                         >
                            <span>Medium (256x256)</span> <Download size={14} />
                         </button>
                         <button 
                           onClick={() => downloadLogoAsPng('xl', 'default')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-4 bg-seed-text-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-all"
                         >
                            <span>Download Master HD (1024px PNG)</span> <Download size={16} />
                         </button>
                      </div>
                    </div>

                    {/* Contrast Variant */}
                    <div className="space-y-6">
                      <h4 className="font-black text-xs uppercase tracking-widest opacity-60">Contrast (Inverted)</h4>
                      <div className="p-12 bg-seed-text-primary rounded-2xl border border-white/10 flex items-center justify-center">
                         <Logo size="xl" showText={false} variant="contrast" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <button 
                           onClick={() => downloadLogoAsPng('sm', 'contrast')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-3 bg-seed-text-primary/5 hover:bg-seed-accent-green/10 rounded-lg text-xs font-bold transition-all"
                         >
                            <span>Small (128x128)</span> <Download size={14} />
                         </button>
                         <button 
                           onClick={() => downloadLogoAsPng('md', 'contrast')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-3 bg-seed-text-primary/5 hover:bg-seed-accent-green/10 rounded-lg text-xs font-bold transition-all"
                         >
                            <span>Medium (256x256)</span> <Download size={14} />
                         </button>
                         <button 
                           onClick={() => downloadLogoAsPng('xl', 'contrast')} 
                           disabled={isExporting}
                           className="flex items-center justify-between w-full p-4 bg-seed-accent-green text-seed-text-primary rounded-xl text-xs font-black uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-all"
                         >
                            <span>Download Master HD (1024px PNG)</span> <Download size={16} />
                         </button>
                      </div>
                    </div>
                  </div>
                  
                  {isExporting && (
                    <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-xl flex items-center gap-3 text-sm font-medium">
                      <Clock size={18} className="animate-spin" /> Rasterizing SVG to PNG...
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 shadow-sm">
                    <span className="block text-3xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green">{stats.total}</span>
                    <span className="text-[10px] font-black uppercase opacity-60">Total Records</span>
                  </div>
                  <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 shadow-sm">
                    <span className="block text-3xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green">{stats.new}</span>
                    <span className="text-[10px] font-black uppercase opacity-60">New Alerts</span>
                  </div>
                  <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 shadow-sm">
                    <span className="block text-3xl font-serif font-black text-seed-text-primary dark:text-white">{stats.assessments}</span>
                    <span className="text-[10px] font-black uppercase opacity-60">Assessments</span>
                  </div>
                  <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 shadow-sm">
                    <span className="block text-3xl font-serif font-black text-seed-text-primary dark:text-white">{stats.applications}</span>
                    <span className="text-[10px] font-black uppercase opacity-60">Network Apps</span>
                  </div>
                </div>

                <div className="bg-seed-text-primary text-white p-8 rounded-3xl shadow-xl flex items-center justify-between overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">System Status: Connected</h3>
                    <p className="text-sm opacity-70">Simulation backend active. Forms are currently hooked to local persistence.</p>
                  </div>
                  <CheckCircle size={40} className="text-seed-accent-green" />
                </div>
              </div>
            )}

            {/* STRIPE TAB */}
            {activeTab === 'stripe' && (
              <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl border border-seed-text-primary/5 shadow-xl animate-fade-in">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-seed-accent-green/10 text-seed-accent-green rounded-xl">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Stripe API Configuration</h3>
                </div>
                
                <form onSubmit={handleSaveSettings} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Publishable Key</label>
                    <input 
                      type="text" 
                      value={settings.stripePublishableKey}
                      onChange={e => setSettings({...settings, stripePublishableKey: e.target.value})}
                      className="w-full bg-seed-bg dark:bg-seed-bg-dark border-2 border-seed-text-primary/5 rounded-xl p-4 font-mono text-sm focus:border-seed-accent-green transition-all" 
                      placeholder="pk_test_..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Secret Key</label>
                    <input 
                      type="password" 
                      value={settings.stripeSecretKey}
                      onChange={e => setSettings({...settings, stripeSecretKey: e.target.value})}
                      className="w-full bg-seed-bg dark:bg-seed-bg-dark border-2 border-seed-text-primary/5 rounded-xl p-4 font-mono text-sm focus:border-seed-accent-green transition-all" 
                      placeholder="sk_test_..."
                    />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5">
                    <input 
                      type="checkbox" 
                      checked={settings.isLiveMode}
                      onChange={e => setSettings({...settings, isLiveMode: e.target.checked})}
                      className="w-5 h-5 rounded border-gray-300 text-seed-accent-green focus:ring-seed-accent-green"
                    />
                    <span className="font-bold text-sm">Enable Production (Live) Mode</span>
                    <span className={`ml-auto px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${settings.isLiveMode ? 'bg-red-500/10 text-red-500' : 'bg-seed-accent-green/10 text-seed-accent-green'}`}>
                      {settings.isLiveMode ? 'Live' : 'Sandbox'}
                    </span>
                  </div>
                  <div className="pt-6">
                    <button type="submit" className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                      Save Credentials
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* INBOX TAB */}
            {(activeTab === 'inbox' || activeTab === 'network') && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white dark:bg-seed-surface-dark rounded-[2rem] border border-seed-text-primary/5 shadow-xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-seed-text-primary text-white text-[10px] font-black uppercase tracking-[0.2em]">
                        <th className="p-6">Timestamp</th>
                        <th className="p-6">Type</th>
                        <th className="p-6">User/Org</th>
                        <th className="p-6">Status</th>
                        <th className="p-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-seed-text-primary/5">
                      {submissions.filter(s => activeTab === 'network' ? s.type === 'solutionologist' : s.type !== 'solutionologist').length === 0 ? (
                        <tr>
                          <td colSpan={5} className="p-20 text-center text-sm opacity-50 italic">No records found.</td>
                        </tr>
                      ) : (
                        submissions.filter(s => activeTab === 'network' ? s.type === 'solutionologist' : s.type !== 'solutionologist').map(sub => (
                          <tr key={sub.id} className={`hover:bg-seed-text-primary/5 transition-colors ${sub.status === 'new' ? 'font-bold' : ''}`}>
                            <td className="p-6 text-xs">{sub.timestamp.toLocaleString()}</td>
                            <td className="p-6 text-xs uppercase tracking-widest">{sub.type}</td>
                            <td className="p-6 text-sm">{sub.data.name || sub.data.organization || 'Unknown'}</td>
                            <td className="p-6">
                              <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${sub.status === 'new' ? 'bg-seed-accent-green/10 text-seed-accent-green' : 'bg-gray-100 text-gray-500'}`}>
                                {sub.status}
                              </span>
                            </td>
                            <td className="p-6 text-right space-x-2">
                              <button onClick={() => setSelectedSubmission(sub)} className="p-2 hover:bg-seed-text-primary/10 rounded-lg text-seed-text-primary dark:text-white transition-colors">
                                <Eye size={16} />
                              </button>
                              <button onClick={() => handleDelete(sub.id)} className="p-2 hover:bg-red-500/10 rounded-lg text-red-500 transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Submission Detail Modal (Inline) */}
                {selectedSubmission && (
                  <div className="bg-seed-bg dark:bg-seed-bg-dark p-8 rounded-[2rem] border-2 border-seed-accent-green/30 animate-fade-in relative">
                    <button onClick={() => setSelectedSubmission(null)} className="absolute top-6 right-6 p-2 hover:bg-red-500/10 rounded-full text-red-500 transition-colors">
                      <Clock size={20} className="rotate-45" />
                    </button>
                    <h4 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                      <FileText className="text-seed-accent-green" /> 
                      Record Detail: {selectedSubmission.data.name || 'Anonymous'}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 text-sm">
                      <div className="space-y-4">
                        {Object.entries(selectedSubmission.data).map(([key, val]) => (
                          <div key={key}>
                            <span className="block text-[10px] font-black uppercase tracking-widest opacity-40">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-bold">{typeof val === 'object' ? JSON.stringify(val) : String(val)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4 justify-end items-end">
                        <button onClick={() => handleUpdateStatus(selectedSubmission.id, 'read')} className="w-full md:w-auto bg-seed-text-primary text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-80">
                          Mark as Read
                        </button>
                        <button onClick={() => handleUpdateStatus(selectedSubmission.id, 'archived')} className="w-full md:w-auto border border-seed-text-primary text-seed-text-primary dark:text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-seed-text-primary hover:text-white">
                          Archive Record
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAXONOMY TAB */}
            {activeTab === 'taxonomy' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5 shadow-xl">
                  <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
                    <Tags className="text-seed-accent-green" /> Add Taxonomy Entry
                  </h3>
                  <form onSubmit={handleAddTaxonomy} className="grid md:grid-cols-3 gap-4 italic font-medium">
                    <input 
                      type="text" 
                      placeholder="Category (e.g., Housing)" 
                      value={newTaxonomy.category}
                      onChange={e => setNewTaxonomy({...newTaxonomy, category: e.target.value})}
                      className="p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="Term" 
                      value={newTaxonomy.term}
                      onChange={e => setNewTaxonomy({...newTaxonomy, term: e.target.value})}
                      className="p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm"
                    />
                    <div className="md:col-span-3 flex gap-4">
                      <textarea 
                        placeholder="Definition" 
                        value={newTaxonomy.definition}
                        onChange={e => setNewTaxonomy({...newTaxonomy, definition: e.target.value})}
                        className="flex-grow p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm h-24"
                      />
                      <button type="submit" className="bg-seed-accent-green text-seed-text-primary font-black px-6 rounded-xl hover:shadow-lg transition-all">
                        Add
                      </button>
                    </div>
                  </form>
                </div>

                <div className="bg-white dark:bg-seed-surface-dark rounded-3xl border border-seed-text-primary/5 shadow-xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-seed-text-primary text-white text-[10px] font-black uppercase tracking-widest">
                        <th className="p-6">Category</th>
                        <th className="p-6">Term</th>
                        <th className="p-6">Definition</th>
                        <th className="p-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-seed-text-primary/5 italic">
                      {taxonomy.length === 0 ? (
                        <tr><td colSpan={4} className="p-10 text-center opacity-40">No taxonomy terms defined.</td></tr>
                      ) : (
                        taxonomy.map(t => (
                          <tr key={t.id} className="text-sm">
                            <td className="p-6 font-bold">{t.category}</td>
                            <td className="p-6 font-bold text-seed-accent-green uppercase tracking-wider">{t.term}</td>
                            <td className="p-6 opacity-70">{t.definition}</td>
                            <td className="p-6 text-right">
                              <button onClick={() => handleDeleteTaxonomy(t.id)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg">
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* BILLING PLANS TAB */}
            {activeTab === 'billing' && userRole === 'admin' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5 shadow-xl">
                  <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="text-seed-accent-green" /> Create Billing Plan
                  </h3>
                  <form onSubmit={handleAddPlan} className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <input 
                        type="text" 
                        placeholder="Plan Name" 
                        value={newPlan.name}
                        onChange={e => setNewPlan({...newPlan, name: e.target.value})}
                        className="p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm italic font-medium"
                      />
                      <input 
                        type="number" 
                        placeholder="Price" 
                        value={newPlan.price}
                        onChange={e => setNewPlan({...newPlan, price: Number(e.target.value)})}
                        className="p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm italic font-medium"
                      />
                      <select 
                        value={newPlan.interval}
                        onChange={e => setNewPlan({...newPlan, interval: e.target.value as any})}
                        className="p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm font-bold uppercase tracking-widest"
                      >
                        <option value="month">Per Month</option>
                        <option value="year">Per Year</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                       <input 
                        type="text" 
                        placeholder="Add feature..." 
                        value={featureInput}
                        onChange={e => setFeatureInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (featureInput) {
                              setNewPlan({...newPlan, features: [...newPlan.features, featureInput]});
                              setFeatureInput('');
                            }
                          }
                        }}
                        className="flex-grow p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/5 text-sm italic"
                       />
                       <button 
                        type="button"
                        onClick={() => {
                           if (featureInput) {
                            setNewPlan({...newPlan, features: [...newPlan.features, featureInput]});
                            setFeatureInput('');
                           }
                        }}
                        className="p-3 bg-seed-accent-green/10 text-seed-accent-green rounded-xl hover:bg-seed-accent-green hover:text-seed-text-primary transition-all"
                       >
                         <Plus size={20} />
                       </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {newPlan.features.map((f, i) => (
                          <span key={i} className="bg-seed-text-primary/5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                            {f} <button type="button" onClick={() => setNewPlan({...newPlan, features: newPlan.features.filter((_, idx) => idx !== i)})}><X size={10} /></button>
                          </span>
                        ))}
                    </div>
                    <button type="submit" className="w-full bg-seed-text-primary text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs shadow-lg">
                      Deploy Plan Architecture
                    </button>
                  </form>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {billingPlans.map(plan => (
                    <div key={plan.id} className="bg-white dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5 shadow-xl relative group">
                      <button 
                        onClick={() => handleDeletePlan(plan.id)}
                        className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                      <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-2">{plan.name}</h4>
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-black italic">${plan.price}</span>
                        <span className="text-xs uppercase opacity-40 font-bold">/ {plan.interval}</span>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm italic font-medium">
                            <CheckCircle size={14} className="text-seed-accent-green" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer 
        onNavigate={() => {}} 
        onNavigateToCOIP={() => {}}
        onNavigateToSection={() => {}} 
        onNavigateToConsulting={() => {}}
        onNavigateToServices={() => {}}
        onNavigateToSolutionologist={() => {}}
        onNavigateToSystemsImpact={() => {}}
        onNavigateToCaseStudies={() => {}}
        onNavigateToFamilies={() => {}}
        onNavigateToAbout={() => {}}
        onNavigateToPrograms={() => {}}
        onNavigateToContact={() => {}}
        onNavigateToDonation={() => {}}
        onOpenContactModal={() => {}} 
        onOpenFeedbackModal={() => {}} 
      />
    </div>
  );
};
