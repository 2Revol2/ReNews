interface Category {
  category: string;
}

export interface News {
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
