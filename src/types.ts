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

export type ServiceType = 
  | 'psicologia-general' 
  | 'ansiedad-estres'
  | 'tristeza-depresion'
  | 'duelo'
  | 'duelo-trauma' 
  | 'psicooncologia'
  | 'bloqueo-emocional-trauma'
  | 'trastornos-psicosomaticos'
  | 'despertar-espiritual'
  | 'liberacion-pericardio'
  | 'valoracion-inicial';

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

export interface BookingFormData {
  service: ServiceType;
  modality: 'presencial' | 'online';
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  privacyAccepted: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  modality: 'presencial' | 'online';
  message: string;
  privacyAccepted: boolean;
}
