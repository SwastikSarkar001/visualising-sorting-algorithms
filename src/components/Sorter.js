function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}

function swap(array, i, j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;  
}