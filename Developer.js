const Person = require('./Person')

module.exports = function Developer(name,age,gender,pLanguage){

    Person.call(this,name,age,gender)

    this.pLanguage = pLanguage

    this.info = function(){
        return `I am ${this.monthsOld()} months old and my favorite programming language is ${this.pLanguage}`
    }

}