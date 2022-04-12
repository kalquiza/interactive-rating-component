const ratingForm = document.querySelector('#rating-form');
const ratingResponse = document.querySelector('.rating-response');
const ratingConfirmText = document.querySelector('.rating-confirm-text');
const ratingConfirm = document.querySelector('.rating-confirm');

ratingForm.addEventListener('submit', async event => {
  event.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked');
  const formData = new FormData();
  formData.append('rating', rating.value);
  
  await fetch('/', {
    method: 'POST',
    body: formData})
    .then((res) => {
      let RatingValue = formData.get('rating');
      console.log(`Your rating [value: ${RatingValue}] was submitted!`, res);
      ratingConfirmText.innerHTML = `You selected ${RatingValue} out of 5`;
      ratingResponse.remove();
      ratingConfirm.classList.toggle('hide');
      ratingConfirm.classList.toggle('active');
    })
    .catch((err) => {
      console.log("An error occured!", err);
    });
});