import { defineStore } from "pinia";
import { User } from "~~/src/domain/user";

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>(null)
  const token = ref<string>(null);
  
  function setToken(tokenVal: string) {
    token.value = tokenVal
  }
  function clearToken() {
    token.value = null
  }
  function setUser(userInfo: User) {
    user.value = userInfo
  }

  return {
    user,
    token,
    setToken,
    clearToken,
    setUser
  }
})