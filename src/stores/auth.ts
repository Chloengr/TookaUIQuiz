import { reactive, readonly } from "vue";

const isLoggedIn = !!localStorage.getItem("JWT_TOKEN");

const _auth = reactive({
  isLoggedIn,
});

export const auth = readonly(_auth);

export function logIn(authentication: { username: string, token: string }) {
  localStorage.setItem("username", authentication.username);
  localStorage.setItem("JWT_TOKEN", authentication.token);
  _auth.isLoggedIn = true;
}

export function logOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("JWT_TOKEN");
  _auth.isLoggedIn = false;
}

export const username = localStorage.getItem("username")