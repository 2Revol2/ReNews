import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getNews } from "@/shared/api/news/api";
import { getCategories } from "@/shared/api/categories/api";
import { getLatestNews } from "@/shared/api/news/api";
import { NewsType } from "@/shared/api/news/types";
class NewsStore {
  latestNews?: IPromiseBasedObservable<any>;
  newsData?: IPromiseBasedObservable<any>;
  categoriesData?: IPromiseBasedObservable<any>;
  currentNews?: NewsType | null;
  currentLatestNews?: NewsType | null;
  constructor() {
    makeAutoObservable(this);
  }

  getNewsAction = async (
    page_number: number = 1,
    page_size: number = 18,
    category: string | null,
    keywords: string
  ) => {
    try {
      this.newsData = fromPromise(
        getNews(page_number, page_size, category, keywords)
      );
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

  setLatestCurrentNews = (currentNews: NewsType) => {
    this.currentNews = this.latestNews?.value.news.find(
      (news: NewsType) => news.id === currentNews.id
    );
  };

  setCurrentNewsAction = (currentNews: NewsType) => {
    this.currentNews = this.newsData?.value.news.find(
      (news: NewsType) => news.id === currentNews.id
    );
  };
}
export const newsStore = new NewsStore();
