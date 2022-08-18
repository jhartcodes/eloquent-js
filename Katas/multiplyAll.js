function multiplyAll(arr) {
   let prod = 1
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for(let j= 0; j < arr[i].length; j++){
            console.log(j, 'inner')
        }
        console.log(i, 'outer loop')
    }
    // Only change code above this line
    return prod
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);