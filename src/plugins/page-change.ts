export default defineNuxtPlugin(() => {
  const router = useRouter();
  let firstLoad = true;

  router.afterEach(() => {
    if (process.client && !firstLoad) {
      window.scrollTo({ top: 0 });
    }

    if (firstLoad) {
      firstLoad = false;
    }
  })

});
