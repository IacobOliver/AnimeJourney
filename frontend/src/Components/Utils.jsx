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
  },

  logInWithToken: ({ setUser, setIsLoggedIn }) => {

    fetch("http://localhost:8080/users/getUserWithToken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data);
        setIsLoggedIn(true)
      })
      .catch(err => console.error(err))
  },

//update details about userAnimeDetails
  onStatusChange: ({e , animeDetailsId, setStatus, setScore, setEffect}) => {

    if (e.target.id == "myScore") {
      console.log("in my score")
      setEffect(true)
      setScore(e.target.value)
    }

    if (e.target.id == "status") {
      console.log(e.target.value + " status")
      setStatus(e.target.value)
    }

    fetch(`http://localhost:8080/savedAnimeUserDetails/editAnimeStatus/${animeDetailsId}/${e.target.id}/${e.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      })

  }
}

const makeRed = (e) => {
  e.current.parentElement.parentElement.lastChild.classList.remove("bg-green-500")
  e.current.parentElement.parentElement.lastChild.classList.add("bg-red-500")
}

const makeGreen = (e) => {
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
    if (validate(e.current.value)) {
      makeGreen(e)
      return true
    } else {
      makeRed(e)
      return false
    }
  },

  password: (e) => {
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
  },

  invalidField: (e) => {
    makeRed(e)
  }

}