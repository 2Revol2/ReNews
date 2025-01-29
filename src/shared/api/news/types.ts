import { Category } from "../categories/types";


export interface NewsType {
  author: string;
  category: Category[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}
