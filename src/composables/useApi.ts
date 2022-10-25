import { Ref } from "nuxt/dist/app/compat/capi";
import { UseFetchOptions } from "nuxt/dist/app/composables";
import { useAuthStore } from "../store/auth/auth";

export const useApi = async <T extends unknown>(path: string | Ref<string> | (() => string) = '', opts: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig();
  const auth = useAuthStore();

  return useFetch(
    path,
    {
      baseURL: config.public.apiUrl,
      headers: {
        Authorization: auth.token ? `Bearer ${auth.token}` : null,
      },
      async onResponseError({ request, response, error }) {
        console.error(request, response, error, 'error response')
      },
      ...opts,
    },
  );
}
