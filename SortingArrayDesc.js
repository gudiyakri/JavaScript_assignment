function descendingSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          // Swap the elements
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  
  var arr= [10,1,0,11,12,3,4,8];
  descendingSort(arr);
  console.log(arr);
  