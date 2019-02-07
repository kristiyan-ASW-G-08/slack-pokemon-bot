const fetch = require('node-fetch');
const getData = async apiUrl => {
  const response = await fetch(apiUrl);
  if (response.status === 404) {
    return {
      error: 'error'
    };
  }
  const responseData = await response.json();
  return responseData;
};
module.exports = getData;
