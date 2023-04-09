const url = 'https://covid-193.p.rapidapi.com';

async function getCountries() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6e32cac39msh75c033fdcbae031p13b9f5jsn2c51b3054bd5',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`${url}/countries`, options);
    const result = await response.json();
    return result;
}

async function getHistoryCountry(country) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6e32cac39msh75c033fdcbae031p13b9f5jsn2c51b3054bd5',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`${url}/history?country=${country}`, options);
    const result = await response.json();
    return result;
}   

export {getCountries, getHistoryCountry};