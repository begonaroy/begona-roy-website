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
  tag?: string;
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

export interface ContactFormData {
  fullName: string;
  email: string;
  modality: 'presencial' | 'online';
  message: string;
  privacyAccepted: boolean;
}
