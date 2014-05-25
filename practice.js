/* Example of handling STDIN in JavaScript
 * 
 * Note: This script is intended to run on NodeJS sever platform.
 *
 */


process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    
    //Put each line into an array
    var array = input.split("\n");

    //For each element in the array, if there is space found, put them into another array
    array.forEach( function(value, index){
        array[index] = array[index].split(" ");
    });

    //To Convert first and second level of this array into integers
    array.forEach( function(val, index){
		if (typeof val === "string"){
			array[index] = parseInt(val);
		}
		else{
			var index1 = index;
			array[index1].forEach( function(val, index){
				array[index1][index] = parseInt(val);
			});
		}
	})

    main(array);
});

/* This is an example of how to find a missing data in Arithmetic Progression from STDIN
 * 
 * @param {Array} array  Nested array from STDIN
 */
function main( array ){
    
    var data1,
        data2,
        location;
    
    data1 = array[1][1] - array[1][0];
    data2 = array[1][2] - array[1][1];
    
    //Diff found in first 3 data
    if (data1 === data2){
        for (var i = 0; i < parseInt(array[0]) - 1; i++){
            var diff = array[1][i+1] - array[1][i];
            if (data1 != diff){
                console.log(array[1][i-1] + diff);
                break;
            }
        }
    }
    //Diff not found in first 3 data
    else{
        var data3 = array[1][3] - array[1][2];
        if( data1 == data3){
            console.log(array[1][1]+data3);
        }
        else if(data2 == data3){
            console.log(array[1][0]+data3);
        }
	}   
};