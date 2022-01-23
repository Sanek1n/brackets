module.exports = function check(str, bracketsConfig) {

  function findInArray(findString, placeFind) { //фунция поиска значения в массиве
    return placeFind.reduce((index,arr) => {
      let placeElement = arr.findIndex((val) => val === findString);
      if ( placeElement > -1) {
        index = placeElement; 
      } 
      return index
  }, -1)
  };

  let key = 0;
  let array = [];
  let arrayBracket = bracketsConfig.map(val => val[0] + val[1]);

  for (let i=0; i < str.length; i++) {
    //console.log(array, str[i])
    if (findInArray(str[i],bracketsConfig) === 0) {
      array.push(str[i]);
    } else if (findInArray(str[i],bracketsConfig) === 1) {
      
      if (arrayBracket.indexOf(String(array[array.length -1] + str[i])) === -1) {

        return false;

      } else {
        array.pop();
      }
    } 
  }
  //console.log(array.length);
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }

}
