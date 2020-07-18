function selectionSort(){
    c_delay = 0;
    var min_idx;
    for(var i=0 ; i<arraySize-1 ; i++){
        div_update(divs[i], div_sizes[i], "yellow");    //Color Update
        min_idx = i;
        for(var j=i+1 ; j<arraySize ; j++){
            div_update(divs[j], div_sizes[j], "red");    //Color Update
            if(div_sizes[j] < div_sizes[min_idx]){
                min_idx = j;
                div_update(divs[min_idx], div_sizes[min_idx], "blue");    //Color Update  
                // div_update(divs[i], div_sizes[i], "blue");    //Color Update
            }else{
                div_update(divs[j], div_sizes[j], "blue");
            }
        }
        if(min_idx != i){
            var temp = div_sizes[min_idx];
            div_sizes[min_idx] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[min_idx], div_sizes[min_idx], "red");    //Height Update  
            div_update(divs[i], div_sizes[i], "red");    //Height Update
            div_update(divs[min_idx], div_sizes[min_idx], "blue");    //Color Update  
        }
        div_update(divs[i], div_sizes[i], "green");    //Color Update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}