export type NavigationTab = 'inicio' | 'psicologia' | 'pericardio' | 'contacto';

export type PsicologiaSpecialty =
  | 'ansiedad'
  | 'depresion'
  | 'duelo'
  | 'psicooncologia'
  | 'trauma'
  | 'psicosomaticos'
  | 'espiritual'
  | 'todos';

export type Modality = 'presencial' | 'online' | 'ambas';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullContent: string[];
  benefits: string[];
  forWhom: string[];
  duration: string;
  modalities: ('Presencial en Zaragoza' | 'Online')[];
  featured?: boolean;
  tag: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'psicologia' | 'pericardio' | 'tarifas' | 'online';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  service: string;
  context: string;
}

export interface BookingDraft {
  modality: 'presencial' | 'online';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  modality: 'presencial' | 'online';
  preferredDate: string;
  preferredTime: string;
  message: string;
  privacyAccepted: boolean;
}
