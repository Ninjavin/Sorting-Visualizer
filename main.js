var algo_select = document.querySelectorAll(".algorithms button");
// console.log(algo_select[0]);
var cont = document.getElementById("sort");
cont.style = "flex-direction: row";
var margin_size;
var divs = [];
var div_sizes = [];

var arraySize = 50;

function generateArray(){
    cont.innerHTML = "";
    for(var i=0 ; i<arraySize ; i++){
        div_sizes[i] = Math.floor(Math.random() * 1 * arraySize) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin: 0% " + margin_size + "%; background-color: blue; width: " + (100/arraySize - (2*margin_size)) + "%; height: " + (div_sizes[i]) + "%; ";
        console.log(div_sizes[i]);
    }
}

window.onload = generateArray();

for(var i=0 ; i<6 ; i++){
    algo_select[i].addEventListener("click", runalgo);
}

function runalgo(){
    console.log("Run Algo Entered");
    // console.log(this);

    switch(this.innerHTML){
        case "Bubble Sort" : bubbleSort();  break;
        case "Selection Sort" : selectionSort();    break;
        case "Quick Sort": quickSort(); break;
        case "Insertion Sort": insertionSort() ; break;
        case "Merge Sort": mergeSort() ; break;
        case "Heap Sort": heapSort(); break;
        default:    break;
    }
}