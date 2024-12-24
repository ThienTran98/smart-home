import { base_URL } from "./ConfigURL";

export let postRegister = (data) => {
  return base_URL.post("/auth/signup", data);
};
export let postLogin = (data) => {
  return base_URL.post("/auth/login", data);
};
export let getAllUser = () => {
  return base_URL.get("/auth/all-users");
};

export let postRefreshToken = () => {
  return base_URL.post("/auth/refresh-token");
};
export let patchUpdateUser = () => {
  return base_URL.patch("/auth/update-user");
};

export let postLogout = () => {
  return base_URL.post("/auth/logout");
};

export let deleteUser = (data) => {
  return base_URL.post("/auth/delete", data);
};
