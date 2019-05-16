"use strict";

const { div } = require("@chaff/fui-html");

exports.execute = (name, target) => {
  const key = `bookmarklets.${name}.running`;

  if (!localStorage.getItem(key)) {
    return new Promise((resolve) => {
      localStorage.setItem(key, "1");

      // Select the node that will be observed for mutations
      var targetNode = div.add(target)();
      document.body.appendChild(targetNode);
      // Options for the observer (which mutations to observe)
      var config = { attributes: true, childList: true, subtree: true };

      // Callback function to execute when mutations are observed
      var callback = (mutationsList, observer) => {
        if (!targetNode.childNodes.length) {
          observer.disconnect();
          document.body.removeChild(targetNode);
          resolve();
        }
      };

      // Create an observer instance linked to the callback function
      var observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(targetNode, config);
    }).then(() => localStorage.removeItem(key));
  }
}
