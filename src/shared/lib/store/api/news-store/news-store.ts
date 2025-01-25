import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getNews } from "@/shared/api/news/api";

class NewsStore {
  newsDate?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }
  getNewsAction = async () => {
    try {
      this.newsDate = fromPromise(getNews());
    } catch (error) {
      console.log(error);
    }
  };
}
export const newsStore = new NewsStore();
