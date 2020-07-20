const island1 = {
  a: 1,
  b: 2,
  c: {
      a: 2,
      b: 2,
      e: {
          a:3,
          
      },
  },
  b: 3,
  m: 3,
}

const island2 = {
  a: 2,
  b: 2,
  c: {
      a: 2,
      b: 2,
      e: {
          a:3,
      },
  },
  b: 3,
  m: 3,
}

let id = 0;
let max = 1;


const deepWay = (object) => {
  
  for (const key in object) { 
      if (object.hasOwnProperty(key)) {
          const element = object[key];
          if(element !== null && typeof element === 'object') {
              id++;
              deepWay(element);
              if (max <= id ) {
                  max = id;
              }
              id = 0;
          } 
      }
  }   
  return max;
}

console.log(deepWay (island1));


const noСoincidence = (object1, object2, res = 0) => {
  for (const key in object1) {
      if (object1.hasOwnProperty(key)) {
          const element1 = object1[key];
          const element2 = object2[key];
          if(element1 !== null && typeof element1 === 'object') {
              noСoincidence(element1, element2, res);
          } else if (element1 != object2[key]) {
              res++;
          }
      }
}   
  return res;
}

console.log(noСoincidence(island1, island2));