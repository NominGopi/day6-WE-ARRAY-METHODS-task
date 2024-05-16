fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    // 1. Get all the countries from Asia continent/region using the Filter method
    const asianCountries = countries.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs (200,000) using the Filter method
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // 3. Print the following details: name, capital, flag, using forEach method
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
    });

    // 4. Print the total population of countries using the reduce method
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usdCountries = countries.filter(country => country.currencies && Object.keys(country.currencies).includes('USD'));
    console.log('Countries that use USD as currency:', usdCountries);
  })
  .catch(error => console.error('Error fetching countries:', error));
