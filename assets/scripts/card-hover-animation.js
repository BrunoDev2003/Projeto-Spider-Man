function handleMouseEnter() {
  console.log('handle mouse enter'.this);
}


function addEventListenerToCard() {
  const cardElements = document.getElementsByClassName('card');

  for(let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter',handleMouseEnter);
  }

}

document.addEventListener("DOMContentLoaded", addEventListenerToCard, false);