module.exports = function Person(name,age,gender){

    this.name = name

    this.age = age

    this.gender = gender

    this.monthsOld = function(){
        return this.age * 12
    }

}