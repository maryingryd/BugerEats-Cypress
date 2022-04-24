var faker = require('faker') // importando biblioteca faker para trabalhar com dados dinamico
var cpf = require ('gerador-validador-cpf') // importando biblioteca para gerar cpf dinamico

export default {

    deliver: function () {

        var firstName = faker.name.firstName() //importando names
        var lastName = faker.name.lastName() //importando names

        var data = {
            name: `${firstName} ${lastName}`, // vai gerar nomes aletórios
            cpf: cpf.generate() ,
            email: faker.internet.email(firstName),// gera email dinamico com base no primeiroNome
            whatsapp: "11999999999",
            address: {
                postalcode: "04534011",
                street: "Rua Joaquim Floriano",
                number: "1000",
                details: "Ap 142",
                district: "Itaim Bibi",
                city_state: "São Paulo/SP"
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg" 
        }
        return data
    }
}