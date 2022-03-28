 function sumAll(arr) {
  let b = arr[1] > arr[0] ? arr[1] : arr[0]
  let i = arr[0] > arr[1] ? arr[1] : arr[0]
  let d = 0
  for (i; i<b; i++){
  d += i
  }
  return i+d;
}
sumAll([1, 4]);
