// Card = function; article = object (w/ strings: headline, authorPhoto, authorName)
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



  // Create elements
  const card = document.createElement("div");
  const headlineTitle = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const author = document.createElement("span");

  // Set classes
  card.classList.add("card");
  headlineTitle.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");

  // Set content
  headlineTitle.textContent = `{ ${article.headline} }`;
  img.src = article.authorPhoto;
  author.textContent = `By { ${article.authorName} }`

  card.appendChild(headlineTitle);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(author);


  return card;
}

console.log(Card({headline: "Breaking News: Satire is outlawed", authorName: "Author McAuthor", authorPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"}));



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
