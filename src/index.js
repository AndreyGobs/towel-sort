
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix === null || matrix <= 0) {
    return [];
  } else {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        
  
        if (i % 2 == 0) {
            for ( let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);   
            }
        } 
  
        if (i % 2 > 0) {
            for ( let j = 0; j < matrix[i].length; j++) {
                matrix[i].reverse();
                result.push(matrix[i][j]);   
            }            
        }
  
    }
  
    return result;
  }
    
}
