/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i = 0;
  var count = 0;
  function findTriangle(x){
    //theese variables were made because every array start it's indexes from 0 and we need start from 1
    var a = x+1;
    var b = preferences[a-1];
    var c = preferences[b-1];
    var d = preferences[c-1];
    //that rule was made for not cycling on one number array or triangles should
    //be consisted from 3 different numbers!
    if(a===d && a!==b && b!==c && c!==d){
      //it's made for not including numbers from previous counted triangles,
      // if we just delete them, we will change indexes of every number. 
      preferences[a-1] = "x";
      preferences[b-1] = "x";
      preferences[c-1] = "x";
      count+=1;
      return true;
    }else{
      return false;
    }
  }
  while(i<=preferences.length-1){
    findTriangle(i);
    i++;
  }
  return count;
};
