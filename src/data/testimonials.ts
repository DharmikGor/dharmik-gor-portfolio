export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'ana-sofia-jimenez',
    name: 'Ana Sofía Jiménez',
    title: 'Senior eCommerce & Digital Project Manager',
    quote:
      'I highly recommend Dharmik for any development work. He has top-notch technical skills, has plenty of ideas for problem-solving, and maintains excellent communication throughout projects. On top of that, he is simply a very nice person to collaborate with!',
    avatar: '/images/testimonials/ana-sofia-jimenez.webp',
  },
];
