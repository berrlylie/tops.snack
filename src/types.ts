export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
