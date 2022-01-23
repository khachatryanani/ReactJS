/////problem 1 - concat/////
Array.prototype.myConcat = function (anotherArray) {
    for(let i = 0; i < anotherArray.length; i++){
        this.push(anotherArray[i]);
    }

    return this;
  };

/////problem 1 - fill/////
Array.prototype.myFill = function (filler, start = 0, end = this.length) {
    if(start < 0)
    {
        start = 0;
    }

    if(end > this.length)
    {
        end = this.length;
    }

    for(let i = start; i < end; i++){
        this[i] = filler;
    }

    return this;
  };

 /////problem 1 - find/////
Array.prototype.myFind = function (predicate) {
    for(let i = 0; i < this.length; i++){
        if(predicate(this[i]))
        {
            return this[i];
        }
    }

    return undefined;
  };

/////problem 1 - findIndex/////
Array.prototype.myFindIndex = function (predicate) {
    for(let i = 0; i < this.length; i++){
        if(predicate(this[i]))
        {
            return i;
        }
    }

    return -1;
  };

  /////problem 1 - flat/////
Array.prototype.myFlat = function (depth = 1) {
   const newArray = [...this];
   while(depth > 0)
   {
    for(let i = 0; i < newArray.length; i++){
        if(Array.isArray(newArray[i]))
        {
            let len = newArray[i].length;
            newArray.splice(i,1, ...newArray[i]);
            i+=len;
        }
        
    }
    depth--;
   }
    
    return newArray;
  };

/////problem 1 - map/////
Array.prototype.myMap = function (mapper) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
       newArray.push(mapper(this[i]));
    }

    return newArray;
  };

/////problem 1 - reduce/////
Array.prototype.myReduce = function (reducer, initialValue) {
    let result = initialValue;
    let i =0;
    
    if(initialValue)
    {
        result = initialValue;
    }
    else
    {
        result = this[0];
        i=1;
    }

    for(i; i < this.length; i++){
       result = reducer(result, this[i]);
     }

     return result;
  };