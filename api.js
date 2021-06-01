const publicKey = "1fd59705ea534b11ead7950313d68e6a";
const privateKey = "ced481dfa0fc804b50b3bea1c9d62e3852a2eb59";

const baseURL = "https://gateway.marvel.com/v1/public";

const imgCointainer = document.querySelector(".img-container");
const charactherName = document.querySelector(".characther-name");
const charactherDescription = document.querySelector(".cdescription");
let ts = Date.now();


const getCharacter = function (event, form) {
  event.preventDefault();
  const charName = form.charName.value;
  let ts = Date.now();

  let hash = CryptoJS.MD5(ts + privateKey + publicoKey).toString();
  let hashString = hash.toString();

  let queryString = `${baseURL}/characthers?ts=${ts}&apikey=${publicoKey}&hash=${hash}$nameStartsWith=Spider-Man`;

  fetch(queryString).then((response) => {
    const data = response.json().then(jsonData => {
        console.log(jsonData);
        const imageUrl = jsonData.data.results[0].thumbnail.path;
        const imageExtension = jsonData.data.results[0].thumbnail.extension;
        const imgSrc = `${imageUrl}.${imageExtension}`;
        const imgElement = document.createElement('img')
        imgChar.src = imgSrc;
        imgChar.alt = charName;
        charactherName.textContent = jsonData.data.result[0].name;
        charactherDescription.textContent = jsonData.data.results[0].description;
  })
})
};