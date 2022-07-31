export function validarEmail(Email) {
    const regExEmail = new RegExp('^\\w{3,20}@(gmail|yahoo).com$', 'g');
    console.log(regExEmail.test(Email));
    return Email.match(regExEmail);
}