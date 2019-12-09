// BLOCK 1
  //Variable Decleration
var height = 6
var width = 10
var xlength = 0
var xcubed = xlength*xlength*xlength
var xsquared = xlength*xlength
  //Checks the bottleneck
  if (height === width){ var shortestside = width }
  if (height > width){
    var shortestside = width}
  if (width > height) { var shortestside = height }
//function of x 
  var volumePoint = xlength*(height-(2*xlength))*(width-(2*xlength))+xcubed
//Dervitive with respect to X of function at point
  var derivitivePoint = (15*xsquared)-(4*height*xlength)-(4*width*xlength)+(width*height)
// Block WORKING
// BLOCK 2
var maxheight = shortestside * .5
var i = 0.01
while(0 <= xlength && xlength <= maxheight ){
  xlength += xlength + i
  i += 0.01

  console.log(xlength)
}







var criticalPoints = 



// Block BROKEN
// Block 3 
  // OUTPUT BLOCK
  console.log("The combined volumes of the boxes =  " + volumePoint )
  console.log("The critical points are found at: " + )



// Block Working
console.log(Math.round(volumePoint))
console.log(Math.round(derivitivePoint))

