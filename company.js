const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName, company) {
    if (company.name === companyName) {
      return company;
    }
  
    if (company.clients) {
      for (const client of company.clients) {
        const result = findValueByKey(companyName, client);
        if (result) {
          return result;
        }
      }
    }
  
    if (company.partners) {
      for (const partner of company.partners) {
        const result = findValueByKey(companyName, partner);
        if (result) {
          return result;
        }
      }
    }
  
    return null;
  }
  
  // Приклад використання
  const companyName = 'Клієнт 1.2.3.4';
  const result = findValueByKey(companyName, company);
  
  if (result) {
    console.log('Інформація про компанію знайдена:', result);
  } else {
    console.log('Компанію з назвою', companyName, 'не знайдено.');
  }
  