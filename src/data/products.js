const products = [
  {
    name: "Plevypan 40",
    slug: "plevypan-40",
    image: "/images/products/plevypan-40.webp",
    alt: "Plevypan 40 product packaging",
    description: "Plevypan 40 product packaging image for catalogue display. Please refer to the approved product label or consult a qualified healthcare professional for composition, dosage, and usage information.",
    category: "Tablets"
  },
  {
    name: "Plevypan DSR",
    slug: "plevypan-dsr",
    image: "/images/products/plevypan-dsr.webp",
    alt: "Plevypan DSR product packaging",
    description: "Plevypan DSR product packaging image for catalogue display. Product details should be verified from the official label before use.",
    category: "Capsules"
  },
  {
    name: "Poly Intest",
    slug: "poly-intest",
    image: "/images/products/poly-intest.webp",
    alt: "Poly Intest product packaging",
    description: "Poly Intest product image for website catalogue and product identification. Please check the approved label for verified product information.",
    category: "Nutraceuticals"
  },
  {
    name: "Otelezos Beta 50",
    slug: "otelezos-beta-50",
    image: "/images/products/otelezos-beta-50.webp",
    alt: "Otelezos Beta 50 product packaging",
    description: "Otelezos Beta 50 product packaging image for product catalogue display. Verify composition, dosage, and usage from the approved label.",
    category: "Tablets"
  },
  {
    name: "Zestify",
    slug: "zestify",
    image: "/images/products/zestify.webp",
    alt: "Zestify product packaging",
    description: "Zestify product packaging image for catalogue display. Please refer to official product information before adding medical details.",
    category: "Nutraceuticals"
  },
  {
    name: "Ogliroc M2F",
    slug: "ogliroc-m2f",
    image: "/images/products/ogliroc-m2f.webp",
    alt: "Ogliroc M2F product packaging",
    description: "Ogliroc M2F product image for website catalogue and product identification. Medical information must be confirmed from the approved label.",
    category: "Tablets"
  },
  {
    name: "Farospira 300 ER",
    slug: "farospira-300-er",
    image: "/images/products/farospira-300-er.webp",
    alt: "Farospira 300 ER product packaging",
    description: "Farospira 300 ER product packaging image for catalogue display. Please verify product details from the official label before publishing.",
    category: "Tablets"
  },
  {
    name: "Ogliroc M3F",
    slug: "ogliroc-m3f",
    image: "/images/products/ogliroc-m3f.webp",
    alt: "Ogliroc M3F product packaging",
    description: "Ogliroc M3F product packaging image for product catalogue display. Usage and dosage details should be added only from verified sources.",
    category: "Tablets"
  },
  {
    name: "Glutamus Gold",
    slug: "glutamus-gold",
    image: "/images/products/glutamus-gold.webp",
    alt: "Glutamus Gold product packaging",
    description: "Glutamus Gold product packaging image for catalogue display. Please refer to the approved product label for verified composition and usage details.",
    category: "Sachets"
  },
  {
    name: "Ogliroc M4F",
    slug: "ogliroc-m4f",
    image: "/images/products/ogliroc-m4f.webp",
    alt: "Ogliroc M4F product packaging",
    description: "Ogliroc M4F product image for website catalogue and product identification. Medical details should be verified before publishing.",
    category: "Tablets"
  },
  {
    name: "Pacretil 10000",
    slug: "pacretil-10000",
    image: "/images/products/pacretil-10000.webp",
    alt: "Pacretil 10000 product packaging",
    description: "Pacretil 10000 product packaging image for catalogue display. Please confirm composition, dosage, and usage from the approved label.",
    category: "Nutraceuticals"
  },
  {
    name: "Tydaproz 10",
    slug: "tydaproz-10",
    image: "/images/products/tydaproz-10.webp",
    alt: "Tydaproz 10 product packaging",
    description: "Tydaproz 10 product packaging image for website catalogue display. Product information should be verified from official sources.",
    category: "Tablets"
  },
  {
    name: "Lacbifimus",
    slug: "lacbifimus",
    image: "/images/products/lacbifimus.webp",
    alt: "Lacbifimus product packaging",
    description: "Lacbifimus product packaging image for catalogue display. Please refer to the approved label or professional guidance for verified details.",
    category: "Capsules"
  },
  {
    name: "Tevastan Gold 20",
    slug: "tevastan-gold-20",
    image: "/images/products/tevastan-gold-20.webp",
    alt: "Tevastan Gold 20 product packaging",
    description: "Tevastan Gold 20 product packaging image for product catalogue display. Verify medical information before publishing.",
    category: "Tablets"
  },
  {
    name: "Tydaproz GM1",
    slug: "tydaproz-gm1",
    image: "/images/products/tydaproz-gm1.webp",
    alt: "Tydaproz GM1 product packaging",
    description: "Tydaproz GM1 product image for website catalogue and product identification. Please confirm details from the approved label.",
    category: "Tablets"
  },
  {
    name: "Pacretil 25000",
    slug: "pacretil-25000",
    image: "/images/products/pacretil-25000.webp",
    alt: "Pacretil 25000 product packaging",
    description: "Pacretil 25000 product packaging image for catalogue display. Composition, dosage, and usage details should be verified from official product information.",
    category: "Nutraceuticals"
  },
  {
    name: "Ramoflush",
    slug: "ramoflush",
    image: "/images/products/ramoflush.webp",
    alt: "Ramoflush product packaging",
    description: "Ramoflush product packaging image for website catalogue display. Please check the approved label for verified product details.",
    category: "Sachets"
  },
  {
    name: "Cinepolis",
    slug: "cinepolis",
    image: "/images/products/cinepolis.webp",
    alt: "Cinepolis product packaging",
    description: "Cinepolis product packaging image for catalogue display. Please verify product information before adding medical claims or usage details.",
    category: "Tablets"
  },
  {
    name: "Linamagnut M",
    slug: "linamagnut-m",
    image: "/images/products/linamagnut-m.webp",
    alt: "Linamagnut M product packaging",
    description: "Linamagnut M product packaging image for product catalogue display. Please confirm spelling and product details from the official label.",
    category: "Tablets"
  },
  {
    name: "Cidiplin Trio",
    slug: "cidiplin-trio",
    image: "/images/products/cidiplin-trio.webp",
    alt: "Cidiplin Trio product packaging",
    description: "Cidiplin Trio product image for website catalogue and product identification. Medical information should be verified from the approved label.",
    category: "Tablets"
  },
  {
    name: "Cidiplin 10",
    slug: "cidiplin-10",
    image: "/images/products/cidiplin-10.webp",
    alt: "Cidiplin 10 product packaging",
    description: "Cidiplin 10 product packaging image for catalogue display. Please refer to the approved label for verified product information.",
    category: "Tablets"
  },
  {
    name: "Cidiplin",
    slug: "cidiplin",
    image: "/images/products/cidiplin.webp",
    alt: "Cidiplin product packaging",
    description: "Cidiplin product packaging image for product catalogue display. Usage and dosage details should be published only after verification.",
    category: "Tablets"
  },
  {
    name: "Cintashine",
    slug: "cintashine",
    image: "/images/products/cintashine.webp",
    alt: "Cintashine product packaging",
    description: "Cintashine product packaging image for website catalogue display. Product details should be verified from the approved label.",
    category: "Tablets"
  },
  {
    name: "Darsocal D3 500",
    slug: "darsocal-d3-500",
    image: "/images/products/darsocal-d3-500.webp",
    alt: "Darsocal D3 500 product packaging",
    description: "Darsocal D3 500 product image for catalogue display. Please confirm composition and usage details from official product information.",
    category: "Tablets"
  },
  {
    name: "Domatorva CV",
    slug: "domatorva-cv",
    image: "/images/products/domatorva-cv.webp",
    alt: "Domatorva CV product packaging",
    description: "Domatorva CV product packaging image for website catalogue display. Medical information must be verified before publishing.",
    category: "Capsules"
  },
  {
    name: "Dubifast NT",
    slug: "dubifast-nt",
    image: "/images/products/dubifast-nt.webp",
    alt: "Dubifast NT product packaging",
    description: "Dubifast NT product packaging image for catalogue display. Please check the approved label for verified product details.",
    category: "Tablets"
  },
  {
    name: "Esorock 40",
    slug: "esorock-40",
    image: "/images/products/esorock-40.webp",
    alt: "Esorock 40 product packaging",
    description: "Esorock 40 product image for website catalogue and product identification. Please verify product details before publishing.",
    category: "Capsules"
  },
  {
    name: "Esorock DSR",
    slug: "esorock-dsr",
    image: "/images/products/esorock-dsr.webp",
    alt: "Esorock DSR product packaging",
    description: "Esorock DSR product packaging image for catalogue display. Composition, dosage, and usage information should come from the approved label.",
    category: "Capsules"
  },
  {
    name: "Megatyco 5G",
    slug: "megatyco-5g",
    image: "/images/products/megatyco-5g.webp",
    alt: "Megatyco 5G product packaging",
    description: "Megatyco 5G product packaging image for website catalogue display. Please verify product information from official sources.",
    category: "Nutraceuticals"
  },
  {
    name: "Glutamus Gold Sachet",
    slug: "glutamus-gold-sachet",
    image: "/images/products/glutamus-gold-sachet.webp",
    alt: "Glutamus Gold sachet packaging",
    description: "Glutamus Gold sachet packaging image for product catalogue display. Please refer to the approved label for verified product information.",
    category: "Sachets"
  },
  {
    name: "Neorise Plus",
    slug: "neorise-plus",
    image: "/images/products/neorise-plus.webp",
    alt: "Neorise Plus product packaging",
    description: "Neorise Plus product packaging image for website catalogue display. Product information should be verified from the approved label.",
    category: "Nutraceuticals"
  },
  {
    name: "Ogliroc M1",
    slug: "ogliroc-m1",
    image: "/images/products/ogliroc-m1.webp",
    alt: "Ogliroc M1 product packaging",
    description: "Ogliroc M1 product image for product catalogue and identification. Please verify composition, dosage, and usage before publishing.",
    category: "Tablets"
  },
  {
    name: "Ogliroc M2",
    slug: "ogliroc-m2",
    image: "/images/products/ogliroc-m2.webp",
    alt: "Ogliroc M2 product packaging",
    description: "Ogliroc M2 product packaging image for catalogue display. Please refer to official product information for verified details.",
    category: "Tablets"
  },
  {
    name: "Ogliroc M3",
    slug: "ogliroc-m3",
    image: "/images/products/ogliroc-m3.webp",
    alt: "Ogliroc M3 product packaging",
    description: "Ogliroc M3 product packaging image for website catalogue display. Medical details should be verified before publishing.",
    category: "Tablets"
  },
  {
    name: "Ogliroc M4F Carton",
    slug: "ogliroc-m4f-carton",
    image: "/images/products/ogliroc-m4f-carton.webp",
    alt: "Ogliroc M4F carton packaging",
    description: "Ogliroc M4F carton packaging image for product catalogue display. Please verify product details from the approved label.",
    category: "Tablets"
  },
  {
    name: "Ogliroc MV 2.3 C",
    slug: "ogliroc-mv-2-3-c",
    image: "/images/products/ogliroc-mv-2-3-c.webp",
    alt: "Ogliroc MV 2.3 C product packaging",
    description: "Ogliroc MV 2.3 C product packaging image for website catalogue display. Please confirm spelling and product details before publishing.",
    category: "Tablets"
  },
  {
    name: "Ogliroc MV1 C",
    slug: "ogliroc-mv1-c",
    image: "/images/products/ogliroc-mv1-c.webp",
    alt: "Ogliroc MV1 C product packaging",
    description: "Ogliroc MV1 C product packaging image for catalogue display. Verified product information should be taken from the approved label.",
    category: "Tablets"
  },
  {
    name: "Ogliroc MV2 C",
    slug: "ogliroc-mv2-c",
    image: "/images/products/ogliroc-mv2-c.webp",
    alt: "Ogliroc MV2 C product packaging",
    description: "Ogliroc MV2 C product packaging image for product catalogue display. Please verify all medical information before publishing.",
    category: "Tablets"
  },
  {
    name: "Otelezos 40 C",
    slug: "otelezos-40-c",
    image: "/images/products/otelezos-40-c.webp",
    alt: "Otelezos 40 C product packaging",
    description: "Otelezos 40 C product image for website catalogue and product identification. Please confirm product details from official information.",
    category: "Tablets"
  },
  {
    name: "Otelezos H C",
    slug: "otelezos-h-c",
    image: "/images/products/otelezos-h-c.webp",
    alt: "Otelezos H C product packaging",
    description: "Otelezos H C product packaging image for catalogue display. Please refer to the approved label for verified details.",
    category: "Tablets"
  },
  {
    name: "Pacretil 25K",
    slug: "pacretil-25k",
    image: "/images/products/pacretil-25k.webp",
    alt: "Pacretil 25K product packaging",
    description: "Pacretil 25K product packaging image for product catalogue display. Composition, dosage, and usage details should be verified before publishing.",
    category: "Nutraceuticals"
  },
  {
    name: "Orthoresipira Catalog",
    slug: "orthoresipira-catalog",
    image: "/images/products/orthoresipira-catalog.webp",
    alt: "Orthoresipira catalogue image",
    description: "Orthoresipira catalogue image for website display. Please verify the exact product name and details before publishing.",
    category: "Catalogue"
  },
  {
    name: "Ramoflush Packshot",
    slug: "ramoflush-packshot",
    image: "/images/products/ramoflush-packshot.webp",
    alt: "Ramoflush packshot image",
    description: "Ramoflush packshot image for product catalogue display. Please verify composition, dosage, and usage details from the approved label.",
    category: "Sachets"
  },
  {
    name: "Repzaten M",
    slug: "repzaten-m",
    image: "/images/products/repzaten-m.webp",
    alt: "Repzaten M product packaging",
    description: "Repzaten M product packaging image for website catalogue display. Medical information should be added only after verification.",
    category: "Tablets"
  },
  {
    name: "Sursifron 300",
    slug: "sursifron-300",
    image: "/images/products/sursifron-300.webp",
    alt: "Sursifron 300 product packaging",
    description: "Sursifron 300 product image for catalogue display. Please confirm all product details from official information before publishing.",
    category: "Tablets"
  },
  {
    name: "Tevastan Gold 10",
    slug: "tevastan-gold-10",
    image: "/images/products/tevastan-gold-10.webp",
    alt: "Tevastan Gold 10 product packaging",
    description: "Tevastan Gold 10 product packaging image for website catalogue display. Please verify medical details before publishing.",
    category: "Tablets"
  },
  {
    name: "Tydaproz SM 1000",
    slug: "tydaproz-sm-1000",
    image: "/images/products/tydaproz-sm-1000.webp",
    alt: "Tydaproz SM 1000 product packaging",
    description: "Tydaproz SM 1000 product packaging image for product catalogue display. Please refer to the approved label for verified information.",
    category: "Tablets"
  },
  {
    name: "Tydaproz M",
    slug: "tydaproz-m",
    image: "/images/products/tydaproz-m.webp",
    alt: "Tydaproz M product packaging",
    description: "Tydaproz M product image for website catalogue and product identification. Product details should be verified before publishing.",
    category: "Tablets"
  },
  {
    name: "Tydaproz S",
    slug: "tydaproz-s",
    image: "/images/products/tydaproz-s.webp",
    alt: "Tydaproz S product packaging",
    description: "Tydaproz S product packaging image for catalogue display. Please verify composition and usage details from official product information.",
    category: "Tablets"
  },
  {
    name: "Tysitren M",
    slug: "tysitren-m",
    image: "/images/products/tysitren-m.webp",
    alt: "Tysitren M product packaging",
    description: "Tysitren M product packaging image for website catalogue display. Please refer to the approved label for verified details.",
    category: "Tablets"
  },
  {
    name: "Zevilval M Tab",
    slug: "zevilval-m-tab",
    image: "/images/products/zevilval-m-tab.webp",
    alt: "Zevilval M Tab product packaging",
    description: "Zevilval M Tab product image for website catalogue display. Please verify product spelling, composition, and usage details before publishing.",
    category: "Tablets"
  }
];

export default products;
