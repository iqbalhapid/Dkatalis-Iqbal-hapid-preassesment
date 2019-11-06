//Probelm statement
//Create a function to convert an array of percentages to their decimal representations

var convertToDecimal = function convertToDecimal(arg) {
  var result = arg //
  for (let i=0; i<arg.length; i++){
    result [i] = parseFloat(arg[i])/100;
  }
	return result
}

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))