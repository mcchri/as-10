let myArray = [9,-4,6,12,-6,7];
let myArray2 = [];
let sum,sum3 = 0;
let sum2 = 0;
let min = 100 * 5 ;
let max = 0;
let max2 = 0;
let last = 0;
let last2 = 0;
let cif = 0;

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
    max2 = max;
    max = myArray[i];
    document.write ("bee", max, "bee");
 }

    else if(myArray[i] < max && myArray[i] > max2 && myArray[i] > min){
         max2 = myArray[i];
         last2 = myArray[i];
         document.write ("yo", max2, "yo");
     }
 if(myArray[i] % 2 == 0){
   sum2 = sum2 + myArray[i];
 }else{
   sum3 = sum3 + myArray[i];
 }
 cif = myArray[i];
 myArray2.push(cif);

}
myArray.push(3);
myArray2.pop();
document.write("</br>");
document.write(sum, " sum of the numbers");
document.write("</br>");
document.write(min, " smallest of the numbers");
document.write("</br>");
document.write(max, " biggest of the numbers");
document.write("</br>");
document.write(max2, " second biggest of the numbers");
document.write("</br>");
document.write(sum2, " sum of the even numbers");
document.write("</br>");
document.write(sum3, " sum  of the odd numbers");
document.write("</br>");
document.write(myArray2, " coppied array");
