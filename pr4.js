let arr = new Array();
let rows = 6;
let columns = 6;
let min = 1;
let max = 99; 

let sumElementsAT = 0;
let sumAvg = 0;
let maxElementRowIndex = -1;
let maxElementColIndex = -1;
let maxElement = -Infinity;

let minElement5 = Infinity; 
let maxElement5 = -Infinity; 
let minColIndex = -1;
let maxColIndex = -1;

let columnsAndRowsToShift = 1;

function shiftColumnsAndRows(myMatrix, columnsAndRowsToShift){
  let shiftedMatrix = Array.from({ length: rows }, () => Array(columns).fill(0));
   for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      let newRow = row - columnsAndRowsToShift; 
      let newCol = col + columnsAndRowsToShift; 
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
          shiftedMatrix[newRow][newCol] = myMatrix[row][col];
        }
    }
  }
  return shiftedMatrix;
}

function matrixArray(){
  for (let i=0; i < rows; i++){
    arr[i] = new Array();
    for(let j = 0; j < columns; j++){
      arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
    return arr;
}

function sumElementsAfterThird(){
  if (columns > 3){
    let sum = 0;
      for(let i = 0; i < rows; i++){  
          for (let j = 3; j < columns; j++){
            sum = myMatrix[i][j] + sum
          }
        sumElementsAT = sumElementsAT + sum
      } 
    }
}

function subtractAverage(subtractedArr){
  for(let i = 0; i < rows; i++){
    sumAvg = 0;
      for(let j = 0; j < columns; j++){
        sumAvg = myMatrix[i][j] + sumAvg;
      }
    sumAvg = sumAvg / columns;
    sumAvg = sumAvg.toFixed(0);
      for(let m = 0; m < columns; m++){
        subtractedArr[i][m] = myMatrix[i][m] - sumAvg;  
      }
  }
}

function deleteRowAndColumnWithMaxElement(){
  for (let f = 0; f < rows; f++) {
    let rowMaxElement = Math.max.apply(null, subtractedMaxArr[f]); 
    let colIndex = subtractedMaxArr[f].indexOf(rowMaxElement);
      if (rowMaxElement > maxElement) {
        maxElement = rowMaxElement;
        maxElementRowIndex = f;
        maxElementColIndex = colIndex;
      }
  }  
  subtractedMaxArr.splice(maxElementRowIndex, 1); 
    for (let i = 0; i < subtractedMaxArr.length; i++) {
      subtractedMaxArr[i].splice(maxElementColIndex, 1);
  }
}

function swapColumnsWithMinAndMax(){
  for (let col = 0; col < columns; col++) {
    for (let row = 0; row < rows; row++) {
      let element = swappedMinAndMax[row][col]; 
        if (element < minElement5) {
          minElement5 = element;
          minColIndex = col;
        }
        if (element > maxElement5) {
          maxElement5 = element;
          maxColIndex = col;
        }
    }
  }
  if (minColIndex !== -1 && maxColIndex !== -1 && minColIndex !== maxColIndex) {
    for (let row = 0; row < rows; row++) {
      let temp = swappedMinAndMax[row][minColIndex];
      swappedMinAndMax[row][minColIndex] = swappedMinAndMax[row][maxColIndex];
      swappedMinAndMax[row][maxColIndex] = temp;
    }
  }
}

let myMatrix = matrixArray();
let subtractedArr = myMatrix.map(row => [...row]);
let subtractedMaxArr = myMatrix.map(row => [...row]);
let swappedMinAndMax = myMatrix.map(row => [...row]);
let shiftedArr = shiftColumnsAndRows(myMatrix, columnsAndRowsToShift);
sumElementsAfterThird();
subtractAverage(subtractedArr);
deleteRowAndColumnWithMaxElement();
swapColumnsWithMinAndMax();

console.log(`Згенерована матриця`);
console.table(myMatrix); //0
console.log(`Матриця після зсуву догори та вправо`)
console.table(shiftedArr); //1
console.log(`Сума елементів після кожного 3 символу = ${sumElementsAT}`); //2
console.log(`Матриця з віднятим середнім значенням кожного рядка`);
console.table(subtractedArr); //3
console.log(`Найбільший елемент ${maxElement}, Рядок: ${maxElementRowIndex}, Стовпець: ${maxElementColIndex}`);
console.log(`Матриця з видаленими рядками та стовпцями, що містили максимальні елементи`);
console.table(subtractedMaxArr); // 4
console.log(`Мінімальний елемент: ${minElement5}, Стовпець: ${minColIndex}`);
console.log(`Максимальний елемент: ${maxElement5}, Стовпець: ${maxColIndex}`);
console.log(`Матриця в якій стовпець з максимальним та мінімальним елементом поміняні місцями`);
console.table(swappedMinAndMax); //5
