export const passwordValidation = (password) => {
    const regex =  /^.{8,}$/;
    return regex.test(password);
}