/*const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal');
request.send();
request.addEventListener('load', function() {
  console.log(this.responseText);
});

*/


const countriesContainer = document.getElementById('countriesContainer');

function getCountryData(countryName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText); // destructure first object
    const html = `
      <div class="country">
        <img src="${data.flag}" alt="Flag of ${data.name}" />
        <h2>${data.name}</h2>
        <p>Region: ${data.region}</p>
        <p>Population: ${(data.population / 1000000).toFixed(1)} million</p>
        <p>Language: ${data.languages[0].name}</p>
        <p>Currency: ${data.currencies[0].name}</p>
      </div>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    
    const newCard = countriesContainer.lastElementChild;
    setTimeout(() => newCard.style.opacity = 1, 100);
  });
}
getCountryData('portugal');
getCountryData('united states of america');
getCountryData('germany');
getCountryData('Egypt');
getCountryData('India');
getCountryData('China');
getCountryData('Australia');
getCountryData('Brazil');   
getCountryData('Canada');
getCountryData('France');
getCountryData('japan');  



