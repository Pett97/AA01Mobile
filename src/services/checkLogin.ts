const CORRECT_USER = "fulano";
const CORRECT_PWD = "123";

export const validateLogin = (user: string, pwd: string): boolean => {
  return user === CORRECT_USER && pwd === CORRECT_PWD;
};
