export const buildQueryString = (params: Record<string, string>): string => {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
};

export const getQueryStringFromUrl = (url: string | null): string | undefined => url?.split('?')?.[1];
