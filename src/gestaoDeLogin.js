// criar vetor de usuários

const usuarios = [
    {
        id: 1,
        nome: "Ronaldinho Gaucho",
        email: "ronaldinho@email.com",
        senha: "ronaldinho123",
        expirado: false,
    },

    {
        id: 2,
        nome: "Ronaldo Fenomeno",
        email: "fenomeno@email.com",
        senha: "fenomeno123",
        expirado: true,
    },

    {
        id: 3,
        nome: "Neymar filho",
        email: "neymar@email.com",
        senha: "neymar123",
        expirado: false,
    },
];

// criar função

export function fazerLogin(email, senha) {

    let usuario = null;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email === email) {
            usuario = usuarios[i];
            break;
        }
    }

    // email não encontrado
    if (usuario === null) {
        throw new Error("Credenciais incorretas");
    }

    // senha incorreta
    if (usuario.senha !== senha) {
        throw new Error("Credenciais incorretas");
    }

    // conta expirada
    if (usuario.expirado === true) {
        throw new Error("Renove suas credenciais");
    }

    return "Login realizado com sucesso";
}