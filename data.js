/* ============================================================
   Sample data — household professionals
   Photos use Unsplash random selectors keyed by name
   ============================================================ */

window.MH_TRADES = [
  { id: 'house-manager', label: 'House Manager' },
  { id: 'estate-manager', label: 'Estate Manager' },
  { id: 'private-chef', label: 'Private Chef' },
  { id: 'housekeeper', label: 'Housekeeper' },
  { id: 'nanny', label: 'Nanny' },
  { id: 'gardener', label: 'Gardener / Grounds' },
  { id: 'butler', label: 'Butler' },
  { id: 'driver', label: 'Driver' },
  { id: 'handyman', label: 'Handyman' },
  { id: 'pet-care', label: 'Pet Care' },
];

window.MH_CITIES = [
  'Aspen, CO', 'Atherton, CA', 'Beverly Hills, CA', 'Greenwich, CT',
  'East Hampton, NY', 'Naples, FL', 'Palm Beach, FL', 'Santa Barbara, CA',
  'Carmel, CA', 'Jackson Hole, WY', 'Nashville, TN', 'Charleston, SC',
];

window.MH_PROS = [
  {
    id: 'p001', name: 'Eleanor Whitfield', trade: 'estate-manager',
    city: 'East Hampton, NY', rate: 95, rating: 4.9, reviews: 142,
    years: 18, verified: true,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
    summary: 'Seasoned estate manager with eighteen years of service to private families across the Hamptons and Manhattan. Specialties include staff coordination, vendor management, and seasonal estate openings.',
    specialties: ['Staff Management', 'Estate Openings', 'Vendor Relations', 'Inventory'],
    languages: ['English', 'French'],
    education: 'Cornell School of Hotel Administration',
  },
  {
    id: 'p002', name: 'Marcus Aldridge', trade: 'private-chef',
    city: 'Beverly Hills, CA', rate: 120, rating: 5.0, reviews: 87,
    years: 12, verified: true,
    photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&q=80&auto=format&fit=crop',
    summary: 'Classically trained chef with experience in Michelin-starred kitchens and private estates. Menus tailored to dietary preferences and seasonal availability.',
    specialties: ['Mediterranean', 'Plant-forward', 'Wine Pairing', 'Children’s Menus'],
    languages: ['English', 'Italian'],
    education: 'Le Cordon Bleu, Paris',
  },
  {
    id: 'p003', name: 'Beatrice Holloway', trade: 'house-manager',
    city: 'Greenwich, CT', rate: 75, rating: 4.8, reviews: 96,
    years: 14, verified: true,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop',
    summary: 'Detail-driven house manager known for seamless household operations and a calm, refined presence. Comfortable with formal protocols and discreet service.',
    specialties: ['Calendar & Travel', 'Household Accounts', 'Staff Scheduling', 'Wardrobe Care'],
    languages: ['English', 'Spanish'],
    education: 'Vanderbilt University, B.A.',
  },
  {
    id: 'p004', name: 'Theodore Brennan', trade: 'butler',
    city: 'Palm Beach, FL', rate: 110, rating: 4.9, reviews: 64,
    years: 22, verified: true,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
    summary: 'Formal butler trained in the British tradition. Expert in service for dinners, receptions, and weekend gatherings. Comfortable in single- and multi-residence environments.',
    specialties: ['Formal Service', 'Wine Cellar', 'Silver & China', 'Event Coordination'],
    languages: ['English'],
    education: 'The British Butler Institute',
  },
  {
    id: 'p005', name: 'Amelia Foster', trade: 'nanny',
    city: 'Atherton, CA', rate: 55, rating: 5.0, reviews: 58,
    years: 9, verified: true,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop',
    summary: 'Warm, educated nanny with a Montessori background. Experienced with infants through school-age children. CPR certified and a confident swimmer.',
    specialties: ['Montessori', 'Newborn Care', 'Travel Nanny', 'Multilingual Play'],
    languages: ['English', 'French', 'Mandarin'],
    education: 'Stanford University, B.A. Education',
  },
  {
    id: 'p006', name: 'Henrietta Vance', trade: 'housekeeper',
    city: 'Aspen, CO', rate: 48, rating: 4.8, reviews: 113,
    years: 16, verified: true,
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80&auto=format&fit=crop',
    summary: 'Meticulous housekeeper with experience caring for fine fabrics, antiques, and luxury finishes. Discreet, quiet, and consistent.',
    specialties: ['Fine Linens', 'Silver Care', 'Wardrobe Management', 'Deep Cleaning'],
    languages: ['English'],
    education: 'Hospitality Institute of America',
  },
  {
    id: 'p007', name: 'Sebastian Cole', trade: 'gardener',
    city: 'Santa Barbara, CA', rate: 62, rating: 4.9, reviews: 74,
    years: 11, verified: true,
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop',
    summary: 'Head gardener specializing in formal landscapes, kitchen gardens, and orchard care. Trained in sustainable practices and seasonal design.',
    specialties: ['Formal Gardens', 'Orchards', 'Kitchen Gardens', 'Irrigation'],
    languages: ['English', 'Spanish'],
    education: 'Royal Horticultural Society Diploma',
  },
  {
    id: 'p008', name: 'Cordelia Ashbrook', trade: 'house-manager',
    city: 'Carmel, CA', rate: 82, rating: 4.9, reviews: 51,
    years: 13, verified: true,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop',
    summary: 'House manager with a background in hospitality. Known for building exceptional teams and maintaining a quiet, organized rhythm at home.',
    specialties: ['Team Building', 'Inventory', 'Travel Logistics', 'Vendor Relations'],
    languages: ['English', 'Italian'],
    education: 'University of Virginia, B.A.',
  },
  {
    id: 'p009', name: 'Nathaniel Pierce', trade: 'driver',
    city: 'Manhattan, NY', rate: 58, rating: 4.8, reviews: 89,
    years: 15, verified: true,
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&auto=format&fit=crop',
    summary: 'Executive driver and security-minded chauffeur. Calm under pressure with excellent geographic familiarity in the tri-state area.',
    specialties: ['Executive Protection', 'Airport Logistics', 'Family Service', 'Defensive Driving'],
    languages: ['English'],
    education: 'Tactical Driving School',
  },
  {
    id: 'p010', name: 'Vivienne Marchetti', trade: 'private-chef',
    city: 'Naples, FL', rate: 105, rating: 4.9, reviews: 71,
    years: 14, verified: true,
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80&auto=format&fit=crop',
    summary: 'Italian-born chef with a focus on coastal Mediterranean cooking. Passionate about local sourcing and family-style dining.',
    specialties: ['Coastal Italian', 'Pastry', 'Garden-to-Table', 'Family Dining'],
    languages: ['Italian', 'English', 'French'],
    education: 'ALMA — The International School of Italian Cuisine',
  },
  {
    id: 'p011', name: 'Rosalind Quincy', trade: 'pet-care',
    city: 'Greenwich, CT', rate: 42, rating: 5.0, reviews: 39,
    years: 8, verified: true,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop',
    summary: 'Equestrian-trained pet professional. Comfortable with dogs of all temperaments, exotic animals, and travel between residences.',
    specialties: ['Multi-pet Households', 'Travel', 'Behavior', 'Wellness Routines'],
    languages: ['English'],
    education: 'Animal Behavior College',
  },
  {
    id: 'p012', name: 'Arthur Pennington', trade: 'handyman',
    city: 'Nashville, TN', rate: 65, rating: 4.8, reviews: 102,
    years: 20, verified: true,
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80&auto=format&fit=crop',
    summary: 'Master handyman experienced with historic homes and luxury finishes. Trusted point of contact for ongoing residence care.',
    specialties: ['Carpentry', 'Plumbing', 'Electrical', 'Historic Home Care'],
    languages: ['English'],
    education: 'Licensed General Contractor',
  },
];

window.MH_TESTIMONIALS = [
  { quote: 'ManagedHome introduced us to a house manager who has transformed daily life. The vetting process was thorough, and the experience felt befitting our home.', name: 'Catherine M.', city: 'Greenwich, CT' },
  { quote: 'After years of word-of-mouth referrals that often fell short, this platform delivered a chef who understood our family in a single conversation.', name: 'Robert & Helen T.', city: 'Palm Beach, FL' },
  { quote: 'As a household professional, I have appreciated being matched with families who genuinely value the work. It is a quieter, more dignified way to find a position.', name: 'Beatrice H.', city: 'House Manager' },
];

window.MH_REVIEWS_BY_PRO = {
  default: [
    { author: 'The Whitman Family', date: 'March 2026', stars: 5, body: 'A consummate professional. Discreet, organized, and genuinely warm. Our household has not run more smoothly in years.' },
    { author: 'A. Pemberton', date: 'February 2026', stars: 5, body: 'Made our move between residences seamless. We could not be more grateful.' },
    { author: 'The Castellano Family', date: 'November 2025', stars: 4, body: 'Wonderful with the staff and a calming presence. Highly recommended.' },
  ]
};
