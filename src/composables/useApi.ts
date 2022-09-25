import { Ref } from "nuxt/dist/app/compat/capi";
import { UseFetchOptions } from "nuxt/dist/app/composables";

export const useApi = async <T extends unknown>(path: string | Ref<string> | (() => string) = '', opts: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig();
  return useFetch(
    path,
    {
      baseURL: config.public.apiUrl,
      async onResponseError({ request, response, error }) {
        console.error(request, response, error, 'error response')
      },
      ...opts,
    },
  );
}
