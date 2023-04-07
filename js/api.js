const api = {
    url: 'https://covid-193.p.rapidapi.com',
    x_rapid_key: 'a6e32cac39msh75c033fdcbae031p13b9f5jsn2c51b3054bd5',
    x_rapid_host: 'covid-193.p.rapid.api.com'
}

const url = api.url;
const key = api.x_rapid_key;
const host = api.x_rapid_host;

async function getCountries() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    
    const response = await fetch(`${url}/countries`, options);
    const result = await response.json();
    return result;
}

async function getHistoryCountry(country, date) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    const response = await fetch(`${url}/history?country=${country}&day=${date}`, options);
    const result = await response.json();
    return result;
}

async function getStatistic(){
    const ops = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    const response = await fetch(`${url}/statistics`, ops);
    const result = await response.json()
    return result;
}

async function getStatisticByCountry(country){
    const ops = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    const response = await fetch(`${url}/statistics?country=${country}`, ops);
    const result = await response.json()
    return result;
}

export {getCountries, getHistoryCountry, getStatistic, getStatisticByCountry}