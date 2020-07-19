import { AUTH_KEY } from "../constants";

export const isAuthenticated = () => !!getFromLocalStorage(AUTH_KEY);

export const getFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const setToLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export const clearLocalStorage = () => localStorage.clear();
