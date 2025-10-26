export const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase().replace(/[<>]/g, "");
};

export const sanitizeUsername = (username: string): string => {
  //    Remove potentially dangerous characters and trim
  return username
    .trim()
    .replace(/[<>'"&]/g, "")
    .substring(0, 50);
};

export const sanitizePassword = (password: string): string => {
  return password.trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email) && email.length <= 254;
};

export const validateUsername = (username: string): boolean => {
  // 3 - 30 chars, alphanumeric + limited special chars
  const usernameRegex = /^[a-zA-Z0-9_-]{3,30}$/;

  return usernameRegex.test(username);
};

export const validatePassword = (password: string): boolean => {
  //    Minimum 8 chars, at least one letter and one number
  return (
    password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password)
  );
};
