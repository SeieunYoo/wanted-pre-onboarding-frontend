const localStorageKey = {
  ACCESS_TOKEN: 'access_token',
};

export const getAccessToken = () => {
  return localStorage.getItem(localStorageKey.ACCESS_TOKEN);
};

export const deleteAccessToken = () => {
  localStorage.clear();
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(localStorageKey.ACCESS_TOKEN, accessToken);
};
