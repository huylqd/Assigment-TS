import { IProduct } from "./product";
export interface ICategory {
  _id: string;
  name: string;
  products?: IProduct[];
}
