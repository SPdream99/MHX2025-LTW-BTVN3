function oddSum(n){
  s = 0;
  for (let i = 1; i <= n; i++) {
    if ((i % 2) !== 0){
      s+=i;
    }
  }
  return s;
}
