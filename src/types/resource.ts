import type { TCategory } from "@/types/category";

export type TResource = {
  id: number;
  created_at: Date;

  name: string;
  link: string;
  image: string;
  category: TCategory;
};
