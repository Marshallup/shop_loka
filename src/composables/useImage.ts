export default function useImage() {
  const config = useRuntimeConfig();

  function getPublicImageSrc(path = '') {
    return `${config.public.backendUrl}/${path}`;
  }

  return {
    getPublicImageSrc,
  }
}
