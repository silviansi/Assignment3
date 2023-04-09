import { getCountries, getHistoryCountry } from "./api.js";

const countries = await getCountries();
const dataCountries = countries.response;
const country = document.getElementById('country');

const activecase = document.getElementById('active-case');
const newcase = document.getElementById('new-case');
const recoveredcase = document.getElementById('recovered-case');
const totalcases = document.getElementById('total-cases');
const totaldeaths = document.getElementById('total-deaths');
const totaltests = document.getElementById('total-tests');

dataCountries.forEach(element => {
document.getElementById('countries').innerHTML += `
        <option value="${element}">${element}</option>
    `
});


document.getElementById('countries').addEventListener('change', async function(e){
    e.preventDefault()
    const countryselect = document.getElementById('countries').value
    country.innerHTML = `${countryselect}`
    const result = await getHistoryCountry(countryselect);

    const history_country = result.response[0];
    const caseCountry = history_country.cases;
    const deathsCountry = history_country.deaths;
    const testsCountry = history_country.tests;

    activecase.innerHTML = caseCountry.active;
    newcase.innerHTML = caseCountry.new;
    recoveredcase.innerHTML = caseCountry.recovered;
    totalcases.innerHTML = caseCountry.total;
    totaldeaths.innerHTML = deathsCountry.total;
    totaltests.innerHTML = testsCountry.total;
})