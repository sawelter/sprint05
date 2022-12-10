import axios from "axios";

// Card = function; article = object (w/ strings: headline, authorPhoto, authorName)
const Card = (article) => {

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
  headlineTitle.textContent = `${article.headline}`;
  img.src = article.authorPhoto;
  author.textContent = `By ${article.authorName}`

  // Structure elements
  card.appendChild(headlineTitle);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(author);

  // Return card
  return card;
}

// Test for Card()
// console.log(Card({headline: "Breaking News: Satire Twitter posts are outlawed", authorName: "Author McAuthor", authorPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"}));



const cardAppender = (selector) => {


  const entry = document.querySelector(selector);


  // response.data... is an object containing:
  // response.data.articles... which is an object containing
  // response.data.articles.javascript, etc. which are arrays, which contain
  // objects that are articles

  axios.get(`http://localhost:5001/api/articles`)
    .then(response => {
      Object.keys(response.data.articles).forEach(key => {
        response.data.articles[key].forEach(element => {
          const newCard = Card(element);
          entry.appendChild(newCard);
        })
      });
    })
    .catch(err =>  {
      console.error(err);
    });
}

// cardAppender(".cards-container");

export { Card, cardAppender }




// Card() function

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


  // Card Appender function
    // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //