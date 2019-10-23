const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    res = 0
    let check = input[0]
    for (let index = 1; index < input.length; index++) {
        const ok = input[index]
        let check2 = ok.split(' ')
        check += parseInt(check2[0]);
        check -= parseInt(check2[1]); 
    }

    if (check >= 0 && check <= 100) {
      res = 1000;
    } else if (check > 100 && check <= 10000) {
      res = 100;
    } else {
        return "KO";
    }
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