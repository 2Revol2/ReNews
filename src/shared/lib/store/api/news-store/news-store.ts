import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getCategories, getNews } from "@/shared/api/news/api";
import { getLatestNews } from "@/shared/api/news/api";
class NewsStore {
  latestNews?: IPromiseBasedObservable<any>;
  newsData?: IPromiseBasedObservable<any>;
  categoriesData?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }

  getNewsAction = async (
    page_number: number = 1,
    page_size: number = 18,
    category: string | null
  ) => {
    try {
      this.newsData = fromPromise(getNews(page_number, page_size, category));
    } catch (error) {
      console.log(error);
    }
  };

  getLatestNewsAction = async () => {
    try {
      this.latestNews = fromPromise(getLatestNews());
    } catch (error) {
      console.log(error);
    }
  };

  getCategoriesAction = async () => {
    try {
      this.categoriesData = fromPromise(getCategories());
    } catch (error) {
      console.log(error);
    }
  };
}
export const newsStore = new NewsStore();
