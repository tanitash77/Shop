

const shopsPrices = [
    {
        "shop": "Electrosila",
        "price": 400,
    },
    {
        "shop": "Sosedi",
        "price": 500,
    }
];

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));





export const getPhones = () =>
    fetch('http://localhost:8090/phones')
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            return data });

export const getPhoneById = (phoneId) =>
    fetch(`http://localhost:8090/phones/${phoneId}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

