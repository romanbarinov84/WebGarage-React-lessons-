

function Email() {

        const email = "alex@gmail.com";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkEmail = emailRegex.test(email);
  return checkEmail ? email : null;
}

export default Email