
/**
 * Simulated Backend Service
 * Handles persistence for form submissions and system settings using localStorage.
 */

export interface SystemSettings {
  stripePublishableKey: string;
  stripeSecretKey: string;
  isLiveMode: boolean;
}

export interface BillingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
}

export interface TaxonomyEntry {
  id: string;
  category: string;
  term: string;
  definition: string;
}

export interface FormSubmission {
  id: string;
  type: 'contact' | 'assessment' | 'solutionologist';
  timestamp: Date;
  data: any;
  status: 'new' | 'read' | 'archived';
}

const STORAGE_KEYS = {
  SETTINGS: 'lt_system_settings',
  SUBMISSIONS: 'lt_form_submissions',
  TAXONOMY: 'lt_taxonomy',
  BILLING_PLANS: 'lt_billing_plans'
};

export const backendService = {
  // --- Settings ---
  getSettings: (): SystemSettings => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return saved ? JSON.parse(saved) : { stripePublishableKey: '', stripeSecretKey: '', isLiveMode: false };
  },

  saveSettings: (settings: SystemSettings) => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  // --- Submissions ---
  getSubmissions: (): FormSubmission[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    return saved ? JSON.parse(saved).map((s: any) => ({ ...s, timestamp: new Date(s.timestamp) })) : [];
  },

  saveSubmission: (type: FormSubmission['type'], data: any) => {
    const submissions = backendService.getSubmissions();
    const newSubmission: FormSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      timestamp: new Date(),
      data,
      status: 'new'
    };
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify([newSubmission, ...submissions]));
    return newSubmission;
  },

  updateSubmissionStatus: (id: string, status: FormSubmission['status']) => {
    const submissions = backendService.getSubmissions();
    const updated = submissions.map(s => s.id === id ? { ...s, status } : s);
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));
  },

  deleteSubmission: (id: string) => {
    const submissions = backendService.getSubmissions();
    const filtered = submissions.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(filtered));
  },

  // --- Taxonomy ---
  getTaxonomy: (): TaxonomyEntry[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.TAXONOMY);
    return saved ? JSON.parse(saved) : [];
  },

  saveTaxonomyEntry: (entry: Omit<TaxonomyEntry, 'id'>) => {
    const taxonomy = backendService.getTaxonomy();
    const newEntry: TaxonomyEntry = {
      ...entry,
      id: Math.random().toString(36).substr(2, 9)
    };
    localStorage.setItem(STORAGE_KEYS.TAXONOMY, JSON.stringify([...taxonomy, newEntry]));
    return newEntry;
  },

  deleteTaxonomyEntry: (id: string) => {
    const taxonomy = backendService.getTaxonomy();
    const filtered = taxonomy.filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEYS.TAXONOMY, JSON.stringify(filtered));
  },

  // --- Billing Plans ---
  getBillingPlans: (): BillingPlan[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.BILLING_PLANS);
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Individual', price: 0, interval: 'month', features: ['Core Frameworks', 'Basic Assessments'] },
      { id: '2', name: 'Partner', price: 49, interval: 'month', features: ['All Individual Features', 'Advanced Analytics', 'Network Access'] }
    ];
  },

  saveBillingPlan: (plan: Omit<BillingPlan, 'id'>) => {
    const plans = backendService.getBillingPlans();
    const newPlan: BillingPlan = {
      ...plan,
      id: Math.random().toString(36).substr(2, 9)
    };
    localStorage.setItem(STORAGE_KEYS.BILLING_PLANS, JSON.stringify([...plans, newPlan]));
    return newPlan;
  },

  deleteBillingPlan: (id: string) => {
    const plans = backendService.getBillingPlans();
    const filtered = plans.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.BILLING_PLANS, JSON.stringify(filtered));
  }
};
