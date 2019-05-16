const { div, h2, span } = require("@chaff/fui-html");
const { wrapper } = require("./lib/dom");

const wordCloudContainer =
  div.attr("style", "width: 480px; height: 520px; margin: auto; border-radius: 3px; background-color: white; overflow: scroll; padding: 20px;");

const wordCloudHead =
  h2.attr("style", "margin-bottom: 8px; text-align: center;").text(document.title)

const wordCloudBody =
  div.lift((frequencyMap) => (
    Object.entries(frequencyMap).reduce((cloud, [word, count]) => (
      cloud.add(span.attr("style", `margin: 0 3px; line-height: 40px; color: black; vertical-align: middle; font-size: ${count = 24 - (24 / count) + 8}px`).text(word))
    ), div.attr("style", "display: flex; flex-wrap: wrap;"))
  ));

const wordCloud =
  wrapper.add(
    wordCloudContainer
      .add(wordCloudHead)
      .add(wordCloudBody)
  );

/**
 * Grab all the text on the page, and strip out all whitespace and non-alphanumeric characters.
 */
const text = document.body.innerText.replace(/\s/g, " ").replace(/[^\sa-zA-Z0-9+]/g, "").split(" ");

/**
 * Reject all words shorter than four characters, and alphabetized then.
 */
const words = text
  .filter((word) => word.length >= 4)
  .map((word) => word.toLowerCase())
  .sort();

/**
 * Build a frequency map of the words, simply by increasing a counter everytime the word is used.
 */
const frequencyMap = {};

for (const word of words) {
  frequencyMap[word] = (frequencyMap[word] | 0) + 1
}

/**
 * Generate and then append the word cloud to the DOM.
 */
document.body.appendChild(wordCloud(frequencyMap))
