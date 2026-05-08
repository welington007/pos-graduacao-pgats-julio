import { fazerLogin } from '../src/gestaoDeLogin.js';
import assert from 'node:assert';

describe("Fazer login", function () {

    it("Deve retornar sucesso quando e-mail e senha estiverem corretos", function () {
        const resultado = fazerLogin("ronaldinho@email.com", "ronaldinho123");

        assert.equal(resultado, "Login realizado com sucesso");
    });

    it("Solicitar renovação quando conta expirada", function () {

        assert.throws(
            function () {
                fazerLogin("fenomeno@email.com", "fenomeno123");
            },
            { message: "Renove suas credenciais" }
        );

    });

    it("Deve retornar credenciais incorretas quando email não existe", function () {

        assert.throws(
            function () {
                fazerLogin("neymannr@email.com", "neyney123");
            },
            { message: "Credenciais incorretas" }
        );

    });

    it("Deve retornar credenciais incorretas quando a senha estiver errada", function () {

        assert.throws(
            function () {
                fazerLogin("ronaldinho@email.com", "senhaerrada");
            },
            { message: "Credenciais incorretas" }
        );

    });

});