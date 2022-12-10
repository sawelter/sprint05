const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Create elements
  const header = document.createElement("div");
  const dateElement = document.createElement("span");
  const titleElement = document.createElement("h1");
  const tempElement = document.createElement("span");

  // Assign tags
  header.classList.add('header');
  dateElement.classList.add('date');
  tempElement.classList.add('temp');

  // Add content
  dateElement.textContent = `${date}`;
  titleElement.textContent = `${title}`;
  tempElement.textContent = `${temp}`;

  // Structure the header
  header.appendChild(dateElement);
  header.appendChild(titleElement);
  header.appendChild(tempElement);

  return header;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const myHeader = Header("Bloomtech Times", "Dec 9, 2022", "33ºF");
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(myHeader);

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

}

export { Header, headerAppender }
