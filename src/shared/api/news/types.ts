interface Category {
  category: string;
}

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
