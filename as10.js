let myArray = [4,-4,6,12,-6,2];
let sum = 0;
let min = 100 * 5 ;
let max = 100 * -5;
let max2 = 100 * -9;
let last = 0;
let last2 = 0;

document.write(myArray);
document.write("</br>");

for(let i = 0;i<myArray.length;i++){
 if(myArray[i] <0){
    document.write(myArray[i], ", ");
 }
 sum = sum + myArray[i];
 if(myArray[i] < min){
    min = myArray[i];
 }
 

 if(myArray[i] > max){
    max = myArray[i];
    last = myArray[i];
    document.write ("bee", max, "bee");
 }

    if(myArray[i] < max && myArray[i] > max2){
         max2 = myArray[i];
         last2 = myArray[i];
         document.write ("yo", max2, "yo");
     }


}
document.write("</br>");
document.write(sum, " sum of the numbers");
document.write("</br>");
document.write(min, " smallest of the numbers");
document.write("</br>");
document.write(max, " biggest of the numbers");
document.write("</br>");
document.write(max2, " second biggest of the numbers");
