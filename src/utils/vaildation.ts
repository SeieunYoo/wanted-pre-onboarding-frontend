export const validation = {
  email: (value: string) => value.includes("@"),
  password: (value: string) => value.length >= 8,
};
