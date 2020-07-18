var speed = 100;
var delay_time = 20;  
var c_delay = 0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/arraySize-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

// function bubbleSort(){
//     c_delay = 0;
//     for(var i=0 ; i<arraySize-1 ; i++){
//         for(var j=0 ; j<arraySize-1-i ; j++){
//             div_update(divs[j], div_sizes[j], "yellow");
//             if(div_sizes[j] > div_sizes[j+1]){
//                 div_update(divs[j],div_sizes[j], "red");//Color update
//                 div_update(divs[j+1],div_sizes[j+1], "red");//Color update

//                 var temp=div_sizes[j];
//                 div_sizes[j]=div_sizes[j+1];
//                 div_sizes[j+1]=temp;

//                 div_update(divs[j],div_sizes[j], "red");//Height update
//                 div_update(divs[j+1],div_sizes[j+1], "red");//Height update
//             }
//             div_update(divs[j], div_sizes[j], "blue");
//         }
//         div_update(divs[j], div_sizes[j], "green");
//     }
//     div_update(divs[0], div_sizes[0], "green");
// }

// function selectionSort(){
//     c_delay = 0;
//     for(var i=0;i<arraySize-1;i++)
//     {
//         div_update(divs[i],div_sizes[i],"red");//Color update

//         index_min=i;

//         for(var j=i+1;j<arraySize;j++)
//         {
//             div_update(divs[j],div_sizes[j],"yellow");//Color update

//             if(div_sizes[j]<div_sizes[index_min])
//             {
//                 if(index_min!=i)
//                 {
//                     div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
//                 }
//                 index_min=j;
//                 div_update(divs[index_min],div_sizes[index_min],"red");//Color update
//             }
//             else
//             {
//                 div_update(divs[j],div_sizes[j],"blue");//Color update
//             }
//         }
        
//         if(index_min!=i)
//         {
//             var temp=div_sizes[index_min];
//             div_sizes[index_min]=div_sizes[i];
//             div_sizes[i]=temp;

//             div_update(divs[index_min],div_sizes[index_min],"red");//Height update
//             div_update(divs[i],div_sizes[i],"red");//Height update
//             div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
//         }
//         div_update(divs[i],div_sizes[i],"green");//Color update
//     }
//     div_update(divs[i],div_sizes[i],"green");//Color update
// }

// function insertionSort(){
//     for(var i=0 ; i<arraySize ; i++){
//         div_update(divs[i],div_sizes[i],"yellow");
//         var temp = div_sizes[i];
//         var j = i-1;
//         while(j>=0 && div_sizes[j]>temp){
//             div_update(divs[j],div_sizes[j],"red");
//             div_update(divs[j+1], div_sizes[j+1], "red");
//             div_sizes[j+1] = div_sizes[j];
//             div_update(divs[j],div_sizes[j],"red");
//             div_update(divs[j+1], div_sizes[j+1], "red");

//             div_update(divs[j],div_sizes[j],"blue");

//             if(j==(i-1)){
//                 div_update(divs[j+1],div_sizes[j+1],"yellow");
//             }else{
//                 div_update(divs[j+1],div_sizes[j+1],"blue");
//             }
//             j--;
//         }
//         div_sizes[j+1] = temp;

//         for(var t=0;t<i;t++)
//         {
//             div_update(divs[t],div_sizes[t],"green");//Color update
//         }
//     }
//     div_update(divs[i-1],div_sizes[i-1],"green");
// }

function mergeSort(){
    c_delay = 0;
    merge_partition(0, arraySize-1);

}

function merge_partition(start,end){
    if(start < end){
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");
        merge_partition(start , mid);
        merge_partition(mid+1 , end);
        merge(start, mid, end);
    }
}

function merge(start, mid, end){
    var i = start;
    var j = mid+1;

    var temp = [];
    var k = 0;

    for(var a = start ; a <= end ; a++){
        if(i > mid){
            temp[k++] = div_sizes[j++];
            div_update(divs[j-1], div_sizes[j-1] , "red");
        }else if(j > end){
            temp[k++] = div_sizes[i++];
            div_update(divs[i-1], div_sizes[i-1] , "red");
        }else if(div_sizes[i] < div_sizes[j]){
            temp[k++] = div_sizes[i++];
            div_update(divs[i-1], div_sizes[i-1] , "red");
        }else{
            temp[k++] = div_sizes[j++];
            div_update(divs[j-1], div_sizes[j-1] , "red");
        }
    }

    for(var t=0 ; t<k ; t++){
        div_sizes[start++] = temp[t];
        div_update(divs[start-1], div_sizes[start-1], "green");
    }
}

function quickSort(){
    c_delay = 0;
    quick(0, arraySize-1);
}

function quick(start,end){
    if(start<end){
        var piv_pos = quickPartition(start, end);
        quick(start, piv_pos-1);
        quick(piv_pos+1, end);
    }
}

function quickPartition(start, end){
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function heapSort(){
    c_delay = 0;
    heap_Sort();

}

function heap_Sort(){
    for(var i=Math.floor(arraySize/2) - 1; i>=0 ; i--)
        heapify(arraySize, i);
    for(var i=arraySize-1 ; i>0 ; i--){
        swap(0, i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update
        heapify(i, 0);
        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i], div_sizes[i], "green");
}

function heapify(n, i){
    var largest = i;
    var l = 2*i + 1;
    var r = 2*i + 2;
    if(l<n && div_sizes[l]>div_sizes[largest]){
        if(largest!=i){
            div_update(divs[largest], div_sizes[largest], "blue");
        }
        largest = l;
        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest]){
        if(largest!=i){
            div_update(divs[largest], div_sizes[largest], "blue");
        }
        largest = r;
        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest != i){
        swap(i, largest);
        heapify(n, largest);
    }
}

function swap(i, j){
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"blue");//Color update
    div_update(divs[j],div_sizes[j],"blue");//Color update
}

