import Cookies from "js-cookie";

export const setLoginCookie = () => {
  Cookies.set("isLoggedIn", "true", { expires: 7 });
};

export const isLoggedIn = () => {
  return Cookies.get("isLoggedIn") === "true";
};

export const removeLoginCookie = () => {
  Cookies.remove("isLoggedIn");
};
