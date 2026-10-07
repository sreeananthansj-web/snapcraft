import frameCrystalMoon from "@/assets/frame-crystal-moon.jpg";
import frameLamp from "@/assets/frame-lamp.jpg";
import frameFamily from "@/assets/frame-family.jpg";
import hamperOnam from "@/assets/hamper-onam.jpg";
import hamperChocolate from "@/assets/hamper-chocolate.jpg";
import heroHamper from "@/assets/hero-hamper.jpg";
import bouquetChocolate from "@/assets/bouquet-chocolate.jpg";
import bouquetFlower from "@/assets/bouquet-flower.jpg";
import keepsake from "@/assets/keepsake.jpg";
import birthday from "@/assets/birthday.jpg";
import engagement from "@/assets/engagement.jpg";

export const img = {
  frameCrystalMoon,
  frameLamp,
  frameFamily,
  hamperOnam,
  hamperChocolate,
  heroHamper,
  bouquetChocolate,
  bouquetFlower,
  keepsake,
  birthday,
  engagement,
};

export type Item = {
  title: string;
  description: string;
  image: string;
  personalization?: string;
};

export const frames: Item[] = [
  {
    title: "Crystal Moon Frame",
    description:
      "An elegant personalized photo frame shaped as a crescent moon — a keepsake made to hold one favourite memory.",
    personalization: "Your photo, names and a short message.",
    image: frameCrystalMoon,
  },
  {
    title: "Half-Moon Crystal Photo Lamp",
    description:
      "A personalized crystal photo lamp with a warm glow, suited to gifting and special occasions.",
    personalization: "Your photo engraved, with optional names and date.",
    image: frameLamp,
  },
  {
    title: "A3 Family Frame",
    description:
      "A large family frame that brings several memories together in one considered layout.",
    personalization: "Multiple photos arranged to your preference.",
    image: frameFamily,
  },
  {
    title: "Custom Photo Merging Frame",
    description:
      "Separate photos of family members or cousins combined into one single customized frame.",
    personalization: "Send your separate photos — we merge them into one.",
    image: keepsake,
  },
];

export const hampers: Item[] = [
  {
    title: "Tailored Chocolate Boxes",
    description: "Chocolate selections arranged and presented around your occasion.",
    image: hamperChocolate,
  },
  {
    title: "Onam Hampers",
    description: "Festival hampers put together for Onam celebrations and family gifting.",
    image: hamperOnam,
  },
  {
    title: "Festival Hampers",
    description: "Seasonal hampers customized according to the festival and the people receiving them.",
    image: heroHamper,
  },
  {
    title: "Birthday Hampers",
    description: "Thoughtful birthday hampers built around what the person loves.",
    image: keepsake,
  },
  {
    title: "Kids' Birthday Packages",
    description: "Playful gift packages created for children's birthdays and surprises.",
    image: birthday,
  },
  {
    title: "Surprise Gifts",
    description: "Surprise gift creations customized according to your occasion and requirements.",
    image: engagement,
  },
];

export const bouquets: Item[] = [
  {
    title: "Chocolate Bouquets",
    description: "Chocolates arranged as a bouquet, wrapped and finished by hand.",
    image: bouquetChocolate,
  },
  {
    title: "Flower Bouquets",
    description: "Fresh flower bouquets styled for the moment you're marking.",
    image: bouquetFlower,
  },
  {
    title: "Surprise Bouquets",
    description: "A bouquet built as a surprise, with details chosen around the person.",
    image: keepsake,
  },
  {
    title: "Custom Gift Arrangements",
    description: "Gifts, flowers and keepsakes arranged together into one creation.",
    image: heroHamper,
  },
];

export const celebrationWorks: Item[] = [
  {
    title: "Engagement Keepsakes",
    description: "Customized engagement crafting and keepsakes for the day and after it.",
    image: engagement,
  },
  {
    title: "Customized Celebration Gifts",
    description: "Personalized gifts designed around weddings and family celebrations.",
    image: keepsake,
  },
  {
    title: "Event Crafting",
    description: "Custom creations and decorative pieces crafted for your event.",
    image: birthday,
  },
];

export const occasions = [
  {
    title: "Birthday",
    description: "Birthday hampers, kids' birthday packages, cakes and personalized gifts.",
    image: birthday,
  },
  {
    title: "Engagement",
    description: "Customized engagement gifts and keepsakes.",
    image: engagement,
  },
  {
    title: "Wedding",
    description: "Personalized gifts and celebration creations.",
    image: bouquetFlower,
  },
  {
    title: "Onam",
    description: "Beautiful festival hampers and gifting options.",
    image: hamperOnam,
  },
  {
    title: "Family Celebrations",
    description: "Personalized frames, keepsakes and surprise gifts.",
    image: frameFamily,
  },
  {
    title: "Special Moments",
    description: "Custom gifting designed around the occasion.",
    image: frameCrystalMoon,
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Crystal Moon Keepsake",
    category: "Frames",
    description: "A crescent crystal frame personalized with a single favourite photo.",
    image: frameCrystalMoon,
  },
  {
    title: "Half-Moon Photo Lamp",
    category: "Frames",
    description: "A warm-glow crystal photo lamp finished on a wooden base.",
    image: frameLamp,
  },
  {
    title: "A3 Family Frame",
    category: "Frames",
    description: "Several family memories arranged into one large frame.",
    image: frameFamily,
  },
  {
    title: "Onam Festival Hamper",
    category: "Festivals",
    description: "A festival hamper put together for Onam gifting.",
    image: hamperOnam,
  },
  {
    title: "Tailored Chocolate Box",
    category: "Hampers",
    description: "A chocolate selection boxed and ribboned by hand.",
    image: hamperChocolate,
  },
  {
    title: "Craft Gift Hamper",
    category: "Hampers",
    description: "A woven basket hamper styled with dried flowers and wrapped gifts.",
    image: heroHamper,
  },
  {
    title: "Chocolate Bouquet",
    category: "Bouquets",
    description: "Chocolates arranged as a bouquet with kraft wrap and ribbon.",
    image: bouquetChocolate,
  },
  {
    title: "Flower Bouquet",
    category: "Bouquets",
    description: "A soft-toned flower bouquet wrapped in cream paper.",
    image: bouquetFlower,
  },
  {
    title: "Kids' Birthday Package",
    category: "Birthday",
    description: "A playful birthday package created for a child's celebration.",
    image: birthday,
  },
  {
    title: "Engagement Keepsakes",
    category: "Engagement",
    description: "Ring trays and a keepsake box crafted for an engagement.",
    image: engagement,
  },
  {
    title: "Personalized Keepsake Box",
    category: "Celebration",
    description: "A keepsake box with an engraved plaque and hand-finished details.",
    image: keepsake,
  },
];

export const portfolioCategories = [
  "All",
  "Frames",
  "Hampers",
  "Bouquets",
  "Birthday",
  "Festivals",
  "Engagement",
  "Celebration",
];
