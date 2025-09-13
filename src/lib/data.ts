import { type Stylist, type Service, type Review, type Category } from '@/lib/types';

export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'Emily R.',
    rating: 5,
    review:
      "Olivia is a miracle worker! She knew exactly what I wanted even when I didn't. I've never felt more confident with my hair.",
  },
  {
    id: 'review-2',
    author: 'David L.',
    rating: 5,
    review:
      'Marcus consistently delivers the sharpest fades. The attention to detail is unmatched. Best barber in town, hands down.',
  },
  {
    id: 'review-3',
    author: 'Sophia T.',
    rating: 5,
    review:
      'I went to Isabella for a balayage and the result was stunning. She is a true artist with color. The salon itself is beautiful and relaxing.',
  },
  {
    id: 'review-4',
    author: 'Michael B.',
    rating: 4,
    review:
      "Great cut from Liam. The online booking was super easy and I didn't have to wait at all. Very professional service.",
  },
  {
    id: 'review-5',
    author: 'Jessica H.',
    rating: 5,
    review:
      'The whole experience was premium from start to finish. My stylist was attentive and the results were fantastic. Worth every penny.',
  },
];

export const stylists: Stylist[] = [
  {
    id: 'stylist-1',
    slug: 'olivia-chen',
    name: 'Olivia Chen',
    specialties: ['Creative Coloring', 'Modern Cuts', 'Bridal Updos'],
    experience: '10 years of transforming hair with artistry and passion.',
    bio: 'With a decade of experience, Olivia is a master of her craft, specializing in vibrant, creative color and chic, modern hairstyles. Her passion is helping clients express their personality through their hair, leaving them feeling beautiful and confident.',
    imageUrl: 'https://picsum.photos/seed/olivia-chen/400/400',
    imageHint: 'professional portrait',
    reviews: [
      reviews[0],
      {
        id: 'review-6',
        author: 'Chloe G.',
        rating: 5,
        review:
          'Olivia transformed my hair from dull to dazzling! Her color work is pure magic.',
      },
    ],
  },
  {
    id: 'stylist-2',
    slug: 'marcus-reid',
    name: 'Marcus Reid',
    specialties: ['Classic Barbering', 'Beard Sculpting', 'Hot Towel Shaves'],
    experience: "8 years of perfecting the art of men's grooming.",
    bio: 'Marcus is a traditional barber with a modern edge. He excels in classic cuts, precision fades, and expert beard sculpting. For Marcus, grooming is an art form and a ritual, ensuring every client leaves looking sharp and feeling refreshed.',
    imageUrl: 'https://picsum.photos/seed/marcus-reid/400/400',
    imageHint: 'male portrait',
    reviews: [
      reviews[1],
      {
        id: 'review-7',
        author: 'Ben S.',
        rating: 5,
        review:
          'If you need a perfect beard trim, Marcus is the guy. Meticulous and skilled.',
      },
    ],
  },
  {
    id: 'stylist-3',
    slug: 'isabella-garcia',
    name: 'Isabella Garcia',
    specialties: ['Balayage & Highlights', 'Long Hair Styling', 'Keratin Treatments'],
    experience: '7 years creating sun-kissed looks and healthy, flowing hair.',
    bio: "Isabella's specialty is creating natural, dimensional color that looks effortlessly beautiful. From subtle highlights to dramatic balayage, she has a keen eye for what complements her clients' features, all while prioritizing hair health.",
    imageUrl: 'https://picsum.photos/seed/isabella-garcia/400/400',
    imageHint: 'woman smiling',
    reviews: [reviews[2]],
  },
  {
    id: 'stylist-4',
    slug: 'liam-johnson',
    name: 'Liam Johnson',
    specialties: ["Men's Scissor Cuts", 'Styling Consultation', 'Grey Blending'],
    experience: '12 years of experience in both salon and barbershop environments.',
    bio: "A versatile and experienced stylist, Liam is comfortable with all hair types and styles. He is particularly skilled in men's scissor cuts and provides excellent consultations to help clients find their perfect, low-maintenance look.",
    imageUrl: 'https://picsum.photos/seed/liam-johnson/400/400',
    imageHint: 'professional man',
    reviews: [reviews[3]],
  },
];

export const services: Service[] = [
  {
    id: 'service-1',
    name: "Women's Haircut & Style",
    description: 'A customized haircut followed by a professional blowout and style.',
    price: 85,
    duration: 60,
    categoryIds: ['hair'],
    imageUrl: 'https://picsum.photos/seed/women-haircut/600/400',
    imageHint: 'woman haircut',
  },
  {
    id: 'service-2',
    name: "Men's Premium Cut",
    description: 'Precision haircut, shampoo, scalp massage, and style.',
    price: 50,
    duration: 45,
    categoryIds: ['hair', 'barbering'],
    imageUrl: 'https://picsum.photos/seed/men-haircut/600/400',
    imageHint: 'man haircut',
  },
  {
    id: 'service-3',
    name: 'Full Balayage',
    description: 'Hand-painted highlights for a natural, sun-kissed look.',
    price: 250,
    duration: 180,
    categoryIds: ['hair', 'coloring'],
    imageUrl: 'https://picsum.photos/seed/hair-coloring/600/400',
    imageHint: 'hair coloring',
  },
  {
    id: 'service-4',
    name: 'Beard Sculpting & Trim',
    description: 'Expert shaping and trimming of your beard, finished with beard oil.',
    price: 35,
    duration: 30,
    categoryIds: ['barbering'],
    imageUrl: 'https://picsum.photos/seed/beard-trim/600/400',
    imageHint: 'beard trim',
  },
  {
    id: 'service-5',
    name: 'Luxury Manicure',
    description: 'Includes nail shaping, cuticle care, massage, and polish.',
    price: 40,
    duration: 45,
    categoryIds: ['nails', 'beauty'],
    imageUrl: 'https://picsum.photos/seed/manicure-service/600/400',
    imageHint: 'manicure nails',
  },
  {
    id: 'service-6',
    name: 'Rejuvenating Facial',
    description: 'A custom facial treatment to cleanse, exfoliate, and nourish your skin.',
    price: 120,
    duration: 60,
    categoryIds: ['skin', 'beauty'],
    imageUrl: 'https://picsum.photos/seed/facial-treatment/600/400',
    imageHint: 'facial treatment',
  },
  {
    id: 'service-7',
    name: "Single Process Color",
    description: "All-over color application for a rich, uniform look.",
    price: 110,
    duration: 120,
    categoryIds: ['hair', 'coloring'],
    imageUrl: "https://picsum.photos/seed/hair-color-single/600/400",
    imageHint: "hair dye application"
  },
  {
    id: 'service-8',
    name: "Hot Towel Shave",
    description: "A classic straight-razor shave with hot towels and rich lather.",
    price: 45,
    duration: 45,
    categoryIds: ['barbering'],
    imageUrl: "https://picsum.photos/seed/hot-towel-shave/600/400",
    imageHint: "shaving hot towel"
  },
  {
    id: 'service-9',
    name: "Luxury Pedicure",
    description: "A pampering pedicure with scrub, mask, massage, and polish.",
    price: 65,
    duration: 60,
    categoryIds: ['nails', 'beauty'],
    imageUrl: "https://picsum.photos/seed/pedicure-spa/600/400",
    imageHint: "pedicure spa"
  },
  {
    id: 'service-10',
    name: "Chemical Peel",
    description: "An advanced exfoliation treatment to improve skin texture and tone.",
    price: 150,
    duration: 60,
    categoryIds: ['skin'],
    imageUrl: "https://picsum.photos/seed/chemical-peel-face/600/400",
    imageHint: "facial peel"
  },
  {
    id: 'service-11',
    name: "Eyebrow Waxing",
    description: "Professional eyebrow shaping and waxing for a clean, defined look.",
    price: 25,
    duration: 20,
    categoryIds: ['waxing'],
    imageUrl: "https://picsum.photos/seed/eyebrow-waxing/600/400",
    imageHint: "eyebrow waxing"
  },
  {
    id: 'service-12',
    name: "Bridal Hair & Makeup",
    description: "Complete hair and makeup services for your special day. Includes trial.",
    price: 450,
    duration: 240,
    categoryIds: ['bridal', 'makeup', 'hair'],
    imageUrl: "https://picsum.photos/seed/bridal-makeup/600/400",
    imageHint: "bride makeup"
  },
  {
    id: 'service-13',
    name: "Deep Conditioning Treatment",
    description: "An intensive treatment to restore moisture, strength, and shine to your hair.",
    price: 60,
    duration: 45,
    categoryIds: ['treatments', 'hair'],
    imageUrl: "https://picsum.photos/seed/hair-mask/600/400",
    imageHint: "hair mask"
  }
];


export const categories: Category[] = [
  {
    id: 'hair',
    name: 'Haircuts',
    imageUrl: 'https://picsum.photos/seed/category-hair/400/400',
    imageHint: 'woman long hair'
  },
  {
    id: 'coloring',
    name: 'Coloring',
    imageUrl: 'https://picsum.photos/seed/category-coloring/400/400',
    imageHint: 'hair dye brush'
  },
  {
    id: 'barbering',
    name: 'Barbering',
    imageUrl: 'https://picsum.photos/seed/category-barber/400/400',
    imageHint: 'barber tools'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    imageUrl: 'https://picsum.photos/seed/category-beauty/400/400',
    imageHint: 'makeup brushes'
  },
  {
    id: 'skin',
    name: 'Skin Care',
    imageUrl: 'https://picsum.photos/seed/category-skin/400/400',
    imageHint: 'facial cream'
  },
  {
    id: 'nails',
    name: 'Nails',
    imageUrl: 'https://picsum.photos/seed/category-nails/400/400',
    imageHint: 'nail polish'
  },
  {
    id: 'waxing',
    name: 'Waxing',
    imageUrl: 'https://picsum.photos/seed/category-waxing/400/400',
    imageHint: 'hot wax'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    imageUrl: 'https://picsum.photos/seed/category-makeup/400/400',
    imageHint: 'makeup palette'
  },
  {
    id: 'bridal',
    name: 'Bridal',
    imageUrl: 'https://picsum.photos/seed/category-bridal/400/400',
    imageHint: 'wedding dress'
  },
  {
    id: 'treatments',
    name: 'Treatments',
    imageUrl: 'https://picsum.photos/seed/category-treatments/400/400',
    imageHint: 'oil bottle'
  }
];


export const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Healthier, Shinier Hair',
    date: 'October 26, 2023',
    excerpt: 'Discover our stylists\' top secrets to maintaining salon-quality hair at home...',
    imageUrl: 'https://picsum.photos/seed/hair-products/600/400',
    imageHint: 'hair products',
    slug: '/blog/healthier-hair-tips',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Beard Care',
    date: 'October 22, 2023',
    excerpt: 'From oils to balms, learn how to keep your beard looking its absolute best...',
    imageUrl: 'https://picsum.photos/seed/beard-trim/600/400',
    imageHint: 'beard trim',
    slug: '/blog/beard-care-guide',
  },
  {
    id: 3,
    title: 'Fall 2023 Hair Color Trends',
    date: 'October 15, 2023',
    excerpt: 'Thinking of a new look for the season? Here are the hottest color trends...',
    imageUrl: 'https://picsum.photos/seed/seasonal-style/600/400',
    imageHint: 'fashion style',
    slug: '/blog/fall-color-trends',
  },
];
