'use strict'

const User = use("App/Models/User")

class UserController {
    async index () {
        return await User.all()       
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id)
        return user     
    }

    async store ({ request }) {
        const data = request.only([
            "nome",
            "CRM",
            "fixFone",
            "fone",
            "cep",
            "numero"
        ])
        const user = await User.create(data)
        return user        
    }

    async update () {
        return { result: 'Buscou todos os medicos'}        
    }

    async delete () {
        return { result: 'Buscou todos os medicos'}        
    }
}
module.exports = UserController
