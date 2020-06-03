/* The function should, when given two sorted arrays 
containing numbers, returns a sorted array of 
the numbers from both lists.
*/


/*const merge = function (array1, array2) {
  let mergedArray = array1.concat(array2);
  let sortedArray = [];
  sortedArray[0] = mergedArray[0];
  for (let i = 1; i < mergedArray.length; i++) {
    //start with sortedArray[0] === mergedArray[0]

    //if mergedArray[i] is bigger than sortedArray[0] AND less than sortedArray[1] 
      //then put it in the second place via splice 
    if (mergedArray[i] >= sortedArray[0] && mergedArray[i] < sortedArray[1]) {
            //use splice to put it in the second spot 


      // if mergedArray[i] is bigger than sortedArray[0] add it to the end of sortedArray
    } else if (mergedArray[i] >= sortedArray[0]) {
        sortedArray.push(mergedArray[i]);

      // if mergedArray[i] is less than sortedArray[0] then stick it on the front 
    } else if (mergedArray[i] < sortedArray[0]) {
      sortedArray.unshift(mergedArray[i]);
    }
    console.log('merged: ' + mergedArray)
    console.log('sorted: ' + sortedArray);
  }
  return sortedArray;
 }
*/

const merge = function(array1, array2) {
  let sortedArray = [];
  let count = 0; 
  let i = 0;
  let j = 0;
  while ((i + j) < (array1.concat(array2)).length) {
    if ( i >= array1.length || array2[j] <= array1[i]) {
      sortedArray.push(array2[j]);
      j += 1;
    } else if (j >= array2.length || array2[j] > array1[i]) {
      sortedArray.push(array1[i]);
      i += 1;
    }
  }
return sortedArray;
}





console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
