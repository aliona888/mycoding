function getDivisorsCnt(n){
    let s = 0;
    for(let i = 1; i<= n; i++){
      if(n % i === 0) s++;
    }
    return s;
  }
  