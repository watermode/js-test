let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
    
  };
  
  let sum = 0;
  
  if (Object.keys(salaries).length === 0) {
 
    console.log("Об'єкт порожній. Загальна сума: 0");
  } else {

    for (let key in salaries) {
      sum += salaries[key];
    }
    console.log("Загальна сума зарплат:", sum);
  }
  
