const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', {urlencoded: true, useMongoClient: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =  
    "O '{VALUE}' informado é amior que o limite máximo de '{MIN}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é valido para o atributo '{PATH}'."
