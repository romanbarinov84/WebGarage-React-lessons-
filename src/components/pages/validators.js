
export const validatePassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
}

export const checkPasswordMatch = (password , confirmPassword) => {
    return password === confirmPassword
}