export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]  // returning a new array with a new last element - action.payload
    default:
      return state;
  }
}

/*
spread operator ...[1,2,3]
spreads the array and returns 1 2 3
so:
let myArr = [1, 2, 3]

//that means that:
console.log (myArr[0], myarr[1], myArr[2]);

//is the same as
console.log (...myArr);

//so if need is to add 4 and 5 to the array

//you could:
let newArr = [myArr[0], myArr[1], myArr[2],3,4]

//but it would be easier to say:
let newArr = [...myArr,3,4]

*/
