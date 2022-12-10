import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  const topicDiv = document.createElement("div");
  topicDiv.classList.add("topics");

  // create tabs
  for(let i = 0; i < topics.length; i++) {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = topics[i];

    topicDiv.appendChild(newTab);
  }

  return topicDiv;
}




const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // 1. It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // 2. Find the array of topics inside the response, and create the tabs using the Tabs component.
  // 3. Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.querySelector(selector);

  axios.get(`http://localhost:5001/api/topics`)
    .then(response => {
        const tabs = Tabs(response.data.topics)
        entryPoint.appendChild(tabs);
    })
    .catch(err => {
      console.error(err);
    })
    .finally();

}

export { Tabs, tabsAppender }
