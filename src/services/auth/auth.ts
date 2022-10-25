import { LOCAL_STORAGE } from "~~/src/enums/localStorage";

export function setAuthToken(token: string) {
  console.log(token, 'token');
}

export function getToken() {
  return localStorage.getItem(LOCAL_STORAGE.TOKEN)
}