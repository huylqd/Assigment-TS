import instance from "./instance";
import { SignInUser } from "../types/user";
import { SignUpUser } from "../types/user";

export const signUp = (user: SignUpUser) => {
  return instance.post(`/signup`, user);
};

export const signIn = (user: SignInUser) => {
  return instance.post(`/signin`, user);
};
