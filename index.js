/*

       QUIZ 
       
       Programacion de Dispositivos Moviles

       Rafael Urdaneta University - 2022C

       Jairo Perez ID.28.336.214


       
            In this quiz, the requirement was to develop an algorithm
            to read a matrix by traversing its elements in a 
            clockwise direction (snail pattern).

*/

//This matrix can be changed to any other matrix
const matrix = [

  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]

];

//This portion of the code will be the actual algorithm
const snail = (array) => {

  //We declare the variable that will be the final array
  let final = [];

  /*  
      We use a while loop that won't stop until
      all numbers in the matrix are traversed. First,
      we get the first array inside the array of arrays,
      then with the map() method we get the last number
      of each array, and push them into the final array.
      Then, we reverse the entire matrix and each element 
      inside it, allowing the loop to continue and 
      retrieve all the numbers in snail order.
  */
  while (array.length) {
    final.push(...array.shift());
    array.map(x => final.push(x.pop()))
    array.reverse().map(x => x.reverse());
  }

  //Finally, we return the final array
  return final
}

//Displaying in console
console.log('\n\n\nThe initial matrix is the following: \n')
console.log(matrix)
console.log('\nThe matrix traversed in snail pattern gives the following RESULT: [' + snail(matrix) + '] \n\n\n')
