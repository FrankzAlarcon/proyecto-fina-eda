const Twit = require('twit');

let twitter  = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

/**Parametros: 1,2,3,4 */
async function getData(username, limit) {
  const { data: { id } } = await getOwnerData(username);
  const data = await twitter.get(`https://api.twitter.com/2/users/${id}/following?user.fields=public_metrics&max_results=${limit}`)
  .then(response => {
    return response.data
  })
  .catch(error => console.log(error));

  return data || 'error';
}
async function getOwnerData(username) {
  const data = await twitter.get(`https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`)
  .then( response => response.data)
  .catch(error => console.log(error));
  return data || 'error';
}

module.exports = {
  getData,
  getOwnerData
};
