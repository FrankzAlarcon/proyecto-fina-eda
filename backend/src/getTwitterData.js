const Twit = require('twit');

let twitter  = new Twit({
  consumer_key: "eukrhMeOtHiGlpxzkzMaOUz9b",
  consumer_secret: "W18F3RDZAb4VLGa7JXIhIFNQfz3HN4LR9IgD80jLniYxj6BYqO",
  access_token: "4865683485-OxjXay7efuS8rtImSZLSv4ocZqRUnCN4QEYq8bl",
  access_token_secret: "4RCc6jzLE9KksMJRS7eHwtdZY6lfwq0doGYlC2VMlqnXk"
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
