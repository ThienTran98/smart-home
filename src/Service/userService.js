import { base_URL } from "./ConfigURL";

export let postRegister = (data) => {
  return base_URL.post("/auth/signup", data);
};
export let postLogin = (data) => {
  return base_URL.post("/auth/login", data);
};

export let getAllUser = () => {
  return base_URL.post("/all-users");
};
