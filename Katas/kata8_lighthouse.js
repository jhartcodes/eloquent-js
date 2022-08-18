// The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:
// [[1, 2], [2, 3]]


const repeatNumbers = function(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let line = '';
    
    for (let x = 0; x < arr[i][1]; x++) {
      line += arr[i][0];
    }

    output.push(line);
  }
  
  return output.join(', ');
};

  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));