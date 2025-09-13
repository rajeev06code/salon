export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: 'men' | 'women' | 'unisex';
  imageUrl: string;
  imageHint: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  review: string;
}

export interface Stylist {
  id: string;
  slug: string;
  name: string;
  specialties: string[];
  experience: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
  reviews: Review[];
}
