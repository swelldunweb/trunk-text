(() => {
  // src/trunk-text/TrunkText.ts
  function TrunkText({ elipseChar, textLength }) {
    let errors = [];
    const container = document.querySelector("#sdw-trunk-container");
    if (container) {
      const items = container.querySelectorAll(".sdw-trunk-item");
      if (items) {
        items.forEach((item) => {
          let textNode = item.querySelector(".sdw-trunk-text");
          if (textNode) {
            let text = textNode.innerHTML;
            if (text.length > textLength) {
              let trunkText = `${text.substring(0, textLength)}${elipseChar}`;
              textNode.innerHTML = trunkText;
            }
          } else {
            errors.push({
              message: "No Items Found with .sdw-trunk-text Class"
            });
          }
        });
      } else {
        errors.push({
          message: "No Items Found with .sdw-trunk-item Class"
        });
      }
    } else {
      errors.push({
        message: "No Container Found with #sdw-trunk-container ID"
      });
    }
    return { done: true, errors };
  }

  // src/trunk-text/index.ts
  if (window && document) {
    document.addEventListener("DOMContentLoaded", () => {
      let errors = [];
      const trunkContainer = document.querySelector("[data-sdw-truncate=true]");
      if (trunkContainer) {
        const elipse = trunkContainer.dataset.sdwElipse;
        const textLength = trunkContainer.dataset.sdwLength;
        if (elipse && textLength) {
          let truncated = TrunkText({
            elipseChar: elipse,
            textLength: Number(textLength)
          });
          if (truncated.errors.length) {
            truncated.errors.forEach((error) => {
              console.log(error.message);
            });
          }
        } else {
          errors.push({
            message: "No data-sdw-elipse or data-sdw-length HTML Element Found"
          });
        }
      } else {
        errors.push({
          message: "No data-sdw-truncate=true HTML Element Found"
        });
      }
      if (errors.length) {
        errors.forEach((error) => {
          console.log(error.message);
        });
      }
      return { done: true, errors };
    });
  }
})();
