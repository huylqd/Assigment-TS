import instance from "./instance";
import { IProduct } from "../types/product";
export const getAllProduct = (keywords: string) => {
  return instance.get(`/api/products?_keywords=${keywords}`);
};
export const getOneProduct = (id: string) => {
  return instance.get(`/api/products/${id}`);
};

export const addProduct = (product: IProduct) => {
  return instance.post(`/api/products`, product);
};

export const updateProduct = (product: IProduct) => {
  return instance.put(`/api/products/${product._id}`, product);
};

export const deleteProduct = (id: string) => {
  return instance.delete(`/api/products/${id}`);
};
