/////////Problem 1///////////////
const AreAllDigitsOdd = (number)=>{
    // base case
    if(number - 10 < 0){
        return number % 2 != 0;
    }

    // modification
    let numberIsOdd = number %2 != 0;
    let slicedNumber = (number - (number % 10)) / 10;

    // recursive call
    return numberIsOdd && AreAllDigitsOdd(slicedNumber);
}


/////////Problem 2///////////////
// initially, call the function with (arr, 0, -1) parameters
const MinPositiveNumber = (arr, index, currentMin)=>{
    // base case
   if(index == arr.length){
       return currentMin;
   }

   // modifications
   if(arr[index] >= 0)
    {
        if(currentMin < 0)
        {
             currentMin = arr[index];
        }
        else if(arr[index] < currentMin)
        {
            currentMin = arr[index];
        }
    }
    
    //recursive call
    return MinPositiveNumber(arr, ++index, currentMin);
}


/////////Problem 3///////////////
// initially, call the function with (arr, 0) parameters
const FindViolation = (arr, index)=>{
    // base case
    if(index == arr.length - 1)
    {
        return arr[index] > arr[index + 1] ? index : -1;
    }

    // break the recurssion if index is found.
    if(arr[index] > arr[index + 1])
    {
        return index;
    }
    else
    {
        // recursive call
        return FindViolation(arr, ++index);
    }
}


/////////Problem 4///////////////
// initially, call the function with (arr, 0) parameters
const RecusriveUnShift = (arr, index) =>{

    // exception case
    if(arr.length == 0)
    {
        return arr;
    }

    // base case
    if(index == arr.length - 1){
        arr.length = index;
        return arr;
    }

    // modification
    arr[index] = arr[index +1];

    // recurive call
    return RecusriveUnShift(arr, ++index);
}


/////////Problem 5///////////////
// initially, call the function with (arr, true) parameters
const FlattenAll = (arr, flattened) => {
    // base case
    if(!flattened)
    {
        return arr;
    }
    
    flattened = false;

    // flattening for one round
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]))
        {
            let len = arr[i].length;
            arr.splice(i,1, ...arr[i]);
            i+=len;
            flattened = true;
        } 
    }

    // recursive call
    return FlattenAll(arr, flattened);
}


/////////Problem 6///////////////
const RecursiveShift = (arr, N)=>
{
    // base case
    if(N == 0){
        return arr;
    }

    // modification
    let firstEl = arr.shift();
    arr.push(firstEl);

    // recursive call
    return RecursiveShift(arr, --N);
}


/////////Problem 7///////////////
// assume we have only positive numbers
const RecursiveSum = (number)=>{

    // base case
    if(number < 10){
        return number;
    }

    // modification
    let result = 0;
    while(number > 0)
    {
        result += number %10;
        number = (number - (number %10))/10;
    }

    // recursive call
    return RecursiveSum(result);
}


/////////Problem 8///////////////
const RecursiveDeepClone = (obj) => 
{
    // base case for primitive types
    if (typeof obj !== "object" || obj === null) 
    {
      return obj;
    }
  
    // array or object
    let copiedObj = Array.isArray(obj) ? [] : {};
  
    // get all the values recursively
    for (key in obj) {
      let value = obj[key];

      copiedObj[key] = RecursiveDeepClone(value);
    }
  
    return copiedObj;
  }


  /////////Problem 9///////////////
  function debounce(debounceFunction, delayTime) {
    let scheduleId;
    return function debounced() {
        const deferredCall = debounceFunction.apply(this, arguments);
        // check if we have something scheduled to cancel it
        if (scheduleId) {
            clearTimeout(scheduleId);
        }
        scheduleId = setTimeout(deferredCall, delayTime);
    }
}


/////////Problem 10///////////////
function throttle(throttleFunction, delayTime) {
    let scheduledId
    return function throttled() {
        const throttledCall = throttleFunction.apply(this, arguments);
        if (scheduledId) {
            return;
        }

        scheduledId = setTimeout(() => {
            // function call
            throttledCall();
            // clear any waiting task
            clearTimeout(scheduledId)
        }, delayTime);
    }
}