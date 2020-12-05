import { HTTPMethod, ApiError } from 'src/types';

export const handleFetchJSONResponse = async <T>(response: Response): Promise<T> => {
  let data;

  try {
    data = await response.json();
  } catch (e) {
    data = {};
  }

  return response.ok ? data : Promise.reject({ status: response.status, error: data } as ApiError);
};

export const httpCall = async <T, B = undefined>(
  url: string,
  method: HTTPMethod = HTTPMethod.GET,
  additionalHeaders?: Record<string, string>
): Promise<T> => {
  const requestInit: RequestInit = {
    method,
    headers: {
      ...additionalHeaders,
    },
  };

  return handleFetchJSONResponse<T>(await fetch(url, requestInit));
};

export const handleApiError = <E extends { message?: string }>({ error }: { error: E }) => {
  throw new Error(error?.message);
};

export async function apiCall<R, P = unknown>(url: string) {
  return httpCall<R, P>(url).catch(handleApiError);
}
