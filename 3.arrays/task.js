function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length){
    result = arr1.every((element, i) => element === arr2[i]);
  } else {
    return false;
  };

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(element => element > 0).filter(element => element % 3 == 0).map(element => element * 10);

  return resultArr; // array
}
