const countriesContainer = document.getElementById('countriesContainer');

/* Fetch Country */
async function getCountryData(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);

    const [data] = await response.json();

    const html = `
      <div class="country card">
        <img src="${data.flag}" alt="Flag of ${data.name}" />
        <h2>${data.name}</h2>
        <p>Region: ${data.region}</p>
        <p>Population: ${(data.population / 1_000_000).toFixed(1)} M</p>
        <p>Language: ${data.languages[0].name}</p>
        <p>Currency: ${data.currencies[0].name}</p>
      </div>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);// ده احسن بكتير جدا من innerHTML +=html احسن في انه طبعا اسرع مبيعيدش بناء ال dom 
  } 
  catch (err) {
    console.error(err);
  }
}

/* --- INTERSECTION OBSERVER FOR ANIMATION --- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

function observeCards() {
  document.querySelectorAll(".card:not(.observed)").forEach(card => {
    card.classList.add("observed");
    observer.observe(card);
  });
}

const countries = ["Egypt","portugal","united states of america","germany","India","China","Australia","Brazil","Canada","France","japan","south africa","argentina","russia","mexico","italy","spain","sweden","norway","netherlands","switzerland","new zealand","saudi arabia","turkey","greece","thailand","indonesia","poland","belgium","austria","ireland","korea","finland","denmark","portugal","tunisia","venezuela","chile","colombia","philipinis","pakistan","bangladesh","iraq","iran","uae","qatar","kuwait","oman","morocco","algeria","tunisia","libya","sudan","ethiopia","kenya","uganda","tanzania","ghana","nigeria","ivory coast","senegal","cameroon","zimbabwe","zambia","malawi","botswana","namibia","madagascar"
];

(async () => {
  for (const c of countries) {
    await getCountryData(c);
    observeCards();
  }
})();
