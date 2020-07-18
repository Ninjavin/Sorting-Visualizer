function bubbleSort(){
    c_delay = 0;
    for(var i=0 ; i < arraySize-1 ; i++){
        // div_update(divs[i], div_sizes[i], "yellow") //Color Update
        for(var j=0 ; j < arraySize-i-1 ; j++){
            div_update(divs[j], div_sizes[j], "yellow") //Color Update

            if(div_sizes[j] > div_sizes[j+1]){
                div_update(divs[j], div_sizes[j], "red");   //Color Update
                div_update(divs[j+1], div_sizes[j+1], "red");   //Color Update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;

                div_update(divs[j], div_sizes[j], "red");   //Height Update
                div_update(divs[j+1], div_sizes[j+1], "red");   //Height Update
            }
            div_update(divs[j], div_sizes[j], "blue");
        }
        div_update(divs[j], div_sizes[j], "green");
    }
    div_update(divs[0], div_sizes[0], "green");
}