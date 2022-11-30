const express = require('express')

module.exports = function(server) {

    // Definit URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi', openApi)

const AuthService = require('../api/user/authService')
openApi.post('/login', AuthService.login)
openApi.post('/signup', AuthService.signup)
openApi.post('/validateToken', AuthService.validateToken)
}