import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getNews } from "@/shared/api/news/api";

class NewsStore {
  newsDate?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }
  getNewsAction = async (page_number: number = 1, page_size: number = 18) => {
    try {
      this.newsDate = fromPromise(getNews(page_number, page_size));
    } catch (error) {
      console.log(error);
    }
  };
}
export const newsStore = new NewsStore();
