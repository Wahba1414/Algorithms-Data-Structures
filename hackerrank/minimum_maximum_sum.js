function miniMaxSum(arr) {
  if (!arr.length)
    return;

  var totalSum = arr[i];
  var min = arr[i];
  var max = arr[i]

  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i])
      min = arr[i];

    if (max < arr[i])
      max = arr[i];

    totalSum += arr[i];
  }

  console.log(`${totalSum - max} ${totalSum - min}`);

}