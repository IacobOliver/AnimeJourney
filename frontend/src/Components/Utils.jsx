export const Utils = {
    giveRandomDistinctIndexes: (length, howMany) =>{
        if (howMany > length && howMany != 2) {
            console.error("cant request more than length")
            console.log("length ", length)
            console.log("how manu",  howMany)
            return;
          }
      
          let result = []
          if(howMany == 2 && howMany > length){
             result = [0,0];
          }else{
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