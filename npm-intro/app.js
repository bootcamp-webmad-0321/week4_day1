const chalk = require('chalk')
const faker = require('faker')

const randomName = faker.name.findName()
const randomEmail = faker.internet.email()

const redMessage = chalk.red.bgBlue.bold(randomName, randomEmail)

console.log(redMessage)