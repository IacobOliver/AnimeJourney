import { validate } from "email-validator"


export const Utils = {
  giveRandomDistinctIndexes: (length, howMany) => {
    if (howMany > length && howMany != 2) {
      console.error("cant request more than length")
      console.log("length ", length)
      console.log("how manu", howMany)
      return;
    }

    let result = []
    if (howMany == 2 && howMany > length) {
      result = [0, 0];
    } else {
      while (howMany > 0) {
        let randomNumber = Math.floor(Math.random() * length)
        if (!result.includes(randomNumber)) {
          result.push(randomNumber);
          howMany--;
        }
      }
    }

    return result;
  }
}

const makeRed = (e) => {
  e.current.parentElement.parentElement.lastChild.classList.remove("bg-green-500")
  e.current.parentElement.parentElement.lastChild.classList.add("bg-red-500")
}

const makeGreen = (e) =>{
  e.current.parentElement.parentElement.lastChild.classList.remove("bg-red-500")
  e.current.parentElement.parentElement.lastChild.classList.add("bg-green-500")
}

export const checking = {
  username: (e) => {
    if (e.current.value.length < 1) {
      makeRed(e)
      return false
    } else {
      makeGreen(e)
      return true
    }
  },

  email: (e) => {
    console.log("in email")
    if (validate(e.current.value)) {
      makeGreen(e)
      return true
    } else {
      makeRed(e)
      return false
    }
  },

  password: (e) => {
    console.log("inPass")
    if (e.current.value.length < 7) {
      makeRed(e)
      return false
    } else {
      makeGreen(e)
      return true
    }
  },

  passwordConf: (pass, passConf) => {
    if (pass.current.value != passConf.current.value) {
      makeRed(passConf)
      return true
    } else {
      makeGreen(passConf)
      return true;
    }
  }

}