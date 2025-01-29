import { baseInstance } from "../base";

export const getCategories = async () =>
  (await baseInstance.get("/available/categories")).data;
