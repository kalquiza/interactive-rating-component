const ratingForm = document.querySelector('#rating-form');
ratingForm.addEventListener('submit', async event => {
  event.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked');
  const formData = new FormData();
  formData.append('rating', rating.value);
  
  await fetch('/', {
    method: 'POST',
    body: formData})
    .then((res) => {
      console.log(`Your rating [value: ${formData.get('rating')}] was submitted!`, res);
    })
    .catch((err) => {
      console.log("An error occured!", err);
    });
});