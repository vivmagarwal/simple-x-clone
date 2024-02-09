const likeButton = document.querySelector(".tweet-actions__item--like");

likeButton.addEventListener("click", function () {
  const likeLabel = this.querySelector(".tweet-actions__label");
  let likeCount = parseInt(likeLabel.textContent);

  if (this.classList.contains("tweet-actions__item--liked")) {
    this.classList.remove("tweet-actions__item--liked");
    likeCount--;
  } else {
    this.classList.add("tweet-actions__item--liked");
    likeCount++;
  }

  likeLabel.textContent = likeCount;
});
