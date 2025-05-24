// src/data.ts

export interface Product {
  title: string;
  description: string;
  image: string;
  id: string;
  categoryId: string; // slug legible de la categoría
}

export interface Category {
  title: string;
  description: string;
  image: string;
  id: string; // slug legible
}

export const categories: Category[] = [
  {
    title: "Ropa de Cama",
    description: "Descubre nuestra colección de ropa de cama.",
    image: "/logo.png",
    id: "ropa-de-cama",
  },
  {
    title: "Toallas",
    description: "Toallas suaves y absorbentes para tu baño.",
    image: "/logo.png",
    id: "toallas",
  },
  {
    title: "Edredones",
    description: "Edredones cálidos y acogedores para el invierno.",
    image: "/logo.png",
    id: "edredones",
  },
  {
    title: "Cojines",
    description: "Cojines decorativos para darle estilo a tu hogar.",
    image: "/logo.png",
    id: "cojines",
  },
];

export const featured: Product[] = [
  {
    title: "Sábanas de Algodón",
    description: "Sábanas suaves y cómodas para un descanso perfecto.",
    image: "/logo.png",
    id: "sabana-algodon",
    categoryId: "ropa-de-cama",
  },
  {
    title: "Toallas de Baño",
    description: "Toallas absorbentes y de alta calidad para tu baño.",
    image: "/logo.png",
    id: "toalla-bano",
    categoryId: "toallas",
  },
  {
    title: "Edredones de Invierno",
    description: "Mantente abrigado con nuestros edredones de invierno.",
    image: "/logo.png",
    id: "edredon-invierno",
    categoryId: "edredones",
  },
  {
    title: "Cojines Decorativos",
    description:
      "Añade un toque de estilo a tu hogar con nuestros cojines decorativos.",
    image: "/logo.png",
    id: "cojin-decorativo",
    categoryId: "cojines",
  },
  {
    title: "Mantas de Lana",
    description: "Mantas suaves y cálidas para tus noches de invierno.",
    image: "/logo.png",
    id: "manta-lana",
    categoryId: "edredones",
  },
  {
    title: "Almohadas Ergonómicas",
    description: "Almohadas que se adaptan a tu forma para un descanso óptimo.",
    image: "/logo.png",
    id: "almohada-ergo",
    categoryId: "cojines",
  },
  {
    title: "Cortinas Opacas",
    description: "Cortinas que bloquean la luz para un ambiente tranquilo.",
    image: "/logo.png",
    id: "cortina-opaca",
    categoryId: "cojines",
  },
];
