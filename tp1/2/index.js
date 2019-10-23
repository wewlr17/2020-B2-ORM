const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    nbrCarton = input[0]
    res = 1
    poid = 0
    for (let index= 1; index < input.length; index++) {
      const check = poid + input[index]
      if (check == 100) {
        poid = 0
        if (input[index+1] != undefined) {
          res += 1
        }
      } else if (check > 100) {
        poid = input[index];
        res+= 1
        console.log("okok")
      } else {
        poid += input[index]
      }
      console.log(poid)
    }

    console.log(poid)
    console.log(res)

    return res
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}