import { Certification } from 'src/types';

export const getCertifications = (language: 'es' | 'en'): Certification[] => [
  {
    name: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/5d1fb473-8900-4051-8852-09af694e496d/linked_in_profile",
    year: "2025"
  },
  {
    name: "AWS Academy Cloud Developing",
    url: "https://www.credly.com/badges/34f22b07-9394-4c8a-9e66-5bf66a3f42e5/public_url",
    year: "2025"
  },
  {
    name: language === 'es' ? "Certificación de inglés (EF SET)" : "English Certification (EF SET)",
    url: "https://cert.efset.org/es/ZsYrXr",
    year: "2024"
  },
  {
    name: language === 'es' ? "Patrones de diseño" : "Design Patterns",
    institution: "University of Alberta - Coursera",
    url: "https://coursera.org/share/81f8945528f7986389df57f1b74e3479",
    year: "2022"
  },
  {
    name: language === 'es' ? "Aspectos básicos del diseño de UX" : "UX Design Fundamentals",
    institution: "California Institute of the Arts - Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/CBNHBU9TJAKQ",
    year: "2022"
  }
];
