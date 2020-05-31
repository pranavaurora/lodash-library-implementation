const _ = {
  clamp(num, lower, upper){
    if (num < lower){
      return lower;
    } else if (num > upper){
      return upper;
    } else {
      return num;
    }
  }, 
  inRange(num, start , end ) {
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (num < start || num >= end) {
      return false;
    }
    return true;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let diff = length - string.length;
    let check = Math.floor(diff/2);
    for (let i = 0; i < check; i++){
      string = ' ' + string + ' ';
    }
    if (diff % 2 === 1) {
      string = string + ' ';
    }
    return string;
  },

  has(object, key){
    let check = object.key;
    if (typeof(check) == "undefined") {
      return false;
    } else {
      return true;
    }
  },
  invert (object) {
    newObj = {};
    for (let key in object){
      originalvalue = object.key;
      newObj.originalvalue = key;
    }
    return newObj;
  },
  findKey(object, predicate){
    for (let key in object){
      if (predicate(object.key)){
        return key;
      }
    }
    return undefined;
  }, 
  
  drop(arr, num){
    if (num == undefined) {
    var newarr = new Array(arr.length-1);
      for (let i = 0; i < newarr.length; i++){
        newarr[i] = arr[i + 1];
      }
      return newarr;
    }
    if (num >= arr) {
      return [];
    }
    var newarr1 = new Array(arr.length-num);
    for (let  j = 0; j < newarr1.length; j++){
      newarr1[j] = arr[j + num];
    }
    return newarr1;
  },
  
  dropWhile(arr, predicate){
    let x = -20;
    for (let i = 0; i < arr.length; i++){
      if (predicate(arr[i], i, arr) == false){
        x = i;
        break;
      }
    }
    if (x == -20) {
      return [];
    }
    var newarr = new Array(arr.length - x);
    for (let i = 0; i < newarr.length; i++){
      newarr[i] = arr[i + x];
    }
    return newarr;
  },

  chunk(arr, size) {
    if (size == undefined) {
      size == 1;
    }
    let numChunk = Math.ceil(arr.length/size);
    var newarr = new Array(numChunk);

    for (let i = 0; i < numChunk.length; i ++){
      let innerarr = new Array(size);
      for (let j = 0; j < size; j ++) {
        innerarr[j] = arr[j * i];
      }
      newarr[i] = innerarr;
    }
    return newarr;
  }
};




// Do not write or modify code below this line.
module.exports = _ ;