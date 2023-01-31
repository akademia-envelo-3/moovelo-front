export const NO_LOADER_PARAM = 'hideLoader=true';
export function requestUrlWithoutLoader(url: string) {
  const hasQueryParams = url.includes('?');

  return `${url}${hasQueryParams ? `&${NO_LOADER_PARAM}` : `?${NO_LOADER_PARAM}`}`;
}
