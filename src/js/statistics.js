//#region Tab Actions
function openOperation(operationName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(operationName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//#endregion

//#region Average/Mean

function calculateMean(data){
    let sum_data = data.reduce((acumulador, elemento) =>{
        //return acumulador + elemento;
        return parseInt(acumulador) + parseInt(elemento);
     });
 
     let total_average = sum_data / data.length;  
     return total_average;
}

function getMean(){
    const input_average = document.getElementById("average_data");
    const result_average = document.getElementById("result_average");

    const data_average = input_average.value.split("-");
    const total_average = calculateMean(data_average);
      
    result_average.innerText = `The mean/average: ${total_average}`;
}

//#endregion

//#region Median

function getMedian(){
    const input_median = document.getElementById("median_data");
    const result_median = document.getElementById("result_median");
    let median = 0;   

    const data_median = input_median.value.split("-");
    const order_data = data_median.sort((a, b) => {
        return a - b;
    });
    const middle = parseInt(order_data.length / 2 );

    if (order_data.length % 2 == 0) {
        median = calculateMean([order_data[middle], order_data[middle - 1]]);
        
    } else {        
        median = order_data[middle];

    }
    result_median.innerText = `The median: ${median}`;
}

//#endregion

//#region Mode

function getMode(){
    const input_mode = document.getElementById("mode_data");
    const result_item = document.getElementById("result_item");
    const result_mode = document.getElementById("result_mode");
    const data_mode = input_mode.value.split("-");
    let object_data = {};    
    const mode = [];

    //Al array de elementos lo evalua por item y se convierte en un objeto por cada elemnto indicando el numero de veces q se repite
    data_mode.map((item) => {
        if (object_data[item]) {
            object_data[item] += 1;
        } else {
            object_data[item] = 1; 
        }
    });
    console.log(data_mode);
    //Convierto el objeto a un array
    const array_data = Object.entries(object_data).sort((a, b) => {
        return a[1] - b[1];
    });

    array_data_format = array_data.map((item) => {
        return item.join(":");
    });

    console.table(object_data);
    console.log(array_data);

    const greather = array_data[array_data.length -1][1];
    array_data.map((item) => {
        if (item[1] === greather) {
            mode.push(item[0]);        
        }
    });
    
    result_item.innerText = `Repeated Items:\n ${array_data_format.join("\n")}`;
    result_mode.innerText = `The mode: ${mode.join(" - ")}`;
}

//#endregion

//#region 
function getHarmonicMean(){
    const input_harmonic = document.getElementById("harmonic_data");
    const result_harmonic = document.getElementById("result_harmonic");

    const data_harmonic = input_harmonic.value.split("-");
    let sum_denominator = 0;
    let sum_data = 0;
    let total_harmonic = 0;

    sum_denominator = data_harmonic.map((item) =>{
        return (1 / item);
    });

    sum_data = sum_denominator.reduce((acumulador, item) =>{
        return acumulador + item;
    });
    console.log(sum_denominator);
    total_harmonic =(data_harmonic.length / sum_data).toFixed(3);
      
    result_harmonic.innerText = `The mean/harmonic: ${total_harmonic}`;
}    
//#endregion