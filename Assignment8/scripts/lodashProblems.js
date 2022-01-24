///INTERSECTION////
const FindIntersection = (...arrays) =>{
    const intersection = arrays[0].filter((elem,i)=> arrays[0].indexOf(elem) ===i);

    for(let i = 0; i < arrays.length; i++){
        for(let j = 0; j < intersection.length; j++)
        {
            if(!arrays[i].includes(intersection[j]))
            {
                intersection.splice(j, 1);
                j--;
            }
        }
    }

    return intersection;
}

///PULL////
const PullFromArray = (array, values) =>{
  
    for(let i = 0; i < values.length; i++)
    {
        while(array.indexOf(values[i]) !== -1)
        {
            let index = array.indexOf(values[i]);
            array.splice(index, 1);
        }
    }

    return array;
}

///TAIL////
const GetTail = (array) =>{
  
    const tail = [];
    for(let i = 1; i < array.length; i++)
    {
        tail.push(array[i]);
    }

    return tail;
}

///TAKE////
const TakeFromArray = (array, take = 1) =>{
  if(take > array.length)
  {
      take = array.length;
  }

  if(take < 0)
  {
      take = 0;
  }

  const takenArray = [];
  for(let i = 0; i< take; i++)
  {
    takenArray.push(array[i]);
  }

  return takenArray;
}