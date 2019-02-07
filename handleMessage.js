const getData = require('./getData');
const handleMessage = async (message, bot, params) => {
  const messageArr = message.split('>');
  if (messageArr.length > 1) {
    const pokemonName = messageArr[messageArr.length - 1].trim();
    let message;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const pokemonData = await getData(apiUrl);
    const types = pokemonData.types;
    let typesStr = '';
    types.forEach(type => {
      typesStr += `${type.type.name} `;
    });
    if (pokemonData.error) {
      message = `Pokemon with name '${pokemonName}' wasn't found!`;
    } else {
      message = `Name: ${pokemonData.name}  Weight: ${
        pokemonData.weight
      } Height: ${pokemonData.height} Types: ${typesStr} `;
    }

    bot.postMessageToChannel('general', message, params);
  }
};

module.exports = handleMessage;
