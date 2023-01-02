export const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const shouldHaveLetterAtLeast = /^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const isNotEmpty = (str: string): boolean => {
  return !(!str || 0 === str.trim().length);
};
