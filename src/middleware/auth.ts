import { getToken } from "../services/auth/auth"
import { useAuthStore } from "../store/auth/auth"

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (process.client) {
    console.log('token')
    authStore.setToken(getToken())
    console.log(process, getToken(), to, authStore, 'process middleware')
  }
})