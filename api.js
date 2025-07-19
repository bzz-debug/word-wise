import axios from "axios";

const thesaurusRequest = axios.create({
  baseURL: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/`,
});

//then add this to the end of each request: ${word}?key=6edab49a-efcb-4721-a4f8-4a73f6d5c023

const dictionaryRequest = axios.create({
  baseURL: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`,
});

//then add this to the end of each request: ${word}?key=c381454b-2ae4-44a5-825c-4afcf68c3ff6

//need to figure out what product I actually want out of this. If I am going to need to generate words, I might need to use an LLM to do that, then feed that into the thesaurus API?

//or, I could create a table of alternative words/phrases and make them clickable, so that on click, it makes an API request, and brings up a description in a pop up or something.....

//maybe look at oxford/cambridge dictionaries instead as merriam-webster is american
