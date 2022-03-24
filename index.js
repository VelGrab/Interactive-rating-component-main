const submitButton = document.querySelector(".btnSubmit");
const ratingButtons = document.querySelectorAll(".ratingBtn");
const userRating = document.querySelector(".userRating");
const hiddenPage = document.querySelector(".hidden");
const errorMessage = document.querySelector(".error-msg");
const cardContainer = document.querySelector(".cardContainer");

let ratingValue = 0;

const ratingSelect = (e) => {
    ratingButtons.forEach(btn => btn.classList.remove('selected'))
    e.target.classList.add('selected')
    ratingValue = e.target.dataset.value
}

const submitCheck = () => {
    if (ratingValue === 0) {
        errorMessage.style.display = 'flex';
        submitButton.classList.add('selectedButton')
    } else {
        userRating.textContent = ratingValue
        cardContainer.style.display = 'none'
        hiddenPage.style.display = 'flex'
    }
}

ratingButtons.forEach(btn => btn.addEventListener('click', ratingSelect))
submitButton.addEventListener('click', submitCheck)