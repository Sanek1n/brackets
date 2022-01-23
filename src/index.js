module.exports = function check(str, bracketsConfig) {

  function findInArray(findString, placeFind) { //фунция поиска значения в массиве
    let findElement 
    placeFind.forEach((value) => {
      if (value[0] === findString) {
        findElement = value[1];
      }
    })
    return findElement;
  };

  let array = [];
    for (let i=0; i < str.length; i++) {
    if (findInArray(array[array.length-1], bracketsConfig) == str[i]) {
        array.pop();
      } else {
        array.push(str[i]);
      }
    }
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }

}
