function myIsNaN(value) {
    if (typeof value !== 'number') {
      if (value === null) return false;
      return false;
    }
    if (value === Infinity || value === -Infinity) return false;
    return value !== value || value === 0;
  }
  
  // Приклади використання:
  console.log(myIsNaN(NaN)); 
  console.log(myIsNaN(123)); 
  console.log(myIsNaN('abc'));
  console.log(myIsNaN(undefined)); 
  console.log(myIsNaN(Infinity));
  console.log(myIsNaN(-Infinity));
  console.log(myIsNaN(null)); 
  console.log(myIsNaN(0)); 
  console.log(myIsNaN(5)); 
  console.log(myIsNaN(null)); 
  