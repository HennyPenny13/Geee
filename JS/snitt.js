

function summerInput() {

    //definerer array-en, den har altså ingen verdier i seg
    let numbers = [];
  
    //bolean datatype
    while (true) {
  
      let value = prompt("Gidd du å skrive en karakter?", "1-6");
      //kun false når begge er false. Ellers true
      //typer du rare greier, eller ikke tall, blir den sur, og break
      //null vil si at input mangler innhold, samme med ""
      if (value === "" || value === null || !isFinite(value)) break;
      //legger til elemtenter i array-en
      numbers.push(+value);
    }
  
    let sum = 0;
    //looper gjennom numbers (en array)
    for (let number of numbers) {
      // legger til number, f.eks 5, i sum
      sum += number;
    }
    sum /= 8;
    return sum
  }
  
  //skriver funksjonen på nettsiden
  document.write("Ditt snitt er " + summerInput() );