exo1 = require("./1")
exo2 = require("./2")
exo3 = require("./3")

const reset = "\x1b[0m"
const red = "\x1b[31m"
const blink = "\x1b[5m"
const green = "\x1b[32m"
const bright = "\x1b[1m"
const exos = [exo1, exo2, exo3]

for (const exo of exos) {
  console.log(`Starting test for ${exo.name}...`)
  for (const dataset of exo.datasets) {

    let result = undefined
    try {
      result = exo.algo(dataset.input)
    } catch (err) {
      console.log(`${exo.name} -> ${bright}${blink}${red}KO${reset}`)
      console.log("\nError :")
      console.log(err)
      return
    }

    if (result !== dataset.output) {
      console.log(`${exo.name} -> ${bright}${blink}${red}KO${reset}`)
      console.log(`${bright}Got ${result} but expected ${dataset.output}${reset}`)
      return
    }
  }
  console.log(`${exo.name} -> ${bright}${green}OK${reset}\n`)
}
console.log(`${bright}${green}GG !${reset}`)