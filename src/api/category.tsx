import instance from "./instance";
import { ICategory } from "../types/category";
export const getAllCategory = (keyword:string) => {
  return instance.get(`/api/categories?_keyword=${keyword}`);
};
export const getOneCategory = (id: string) => {
  return instance.get(`/api/categories/${id}`);
};

export const addCategory = (category: ICategory) => {
  return instance.post(`/api/categories`, category);
};

export const updateCategory = (category: ICategory) => {
  return instance.patch(`/api/categories/${category._id}`, category);
};

export const deleteCategory = (id: string) => {
  return instance.delete(`/api/categories/${id}`);
};
