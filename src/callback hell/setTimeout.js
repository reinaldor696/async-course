//setTimeout

setTimeout(function() {
    console.log('hola JavaScript');  
  }, 2000);
  
  function gretting(name) {
      console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Reinaldo');