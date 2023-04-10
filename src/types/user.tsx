export interface SignInUser {
  _id: string;
  email: string;
  password: string;
}
export interface SignUpUser extends SignInUser {
  name: string;
  confirmPassword: string;
}

export interface UserLogged {
  _id: string;
  name: string;
  email: string;
  role: string;
}
