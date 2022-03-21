import { TrunkText } from './TrunkText';

if (window && document) {
  document.addEventListener('DOMContentLoaded', () => {
    let errors = [];
    const trunkContainer = document.querySelector('[data-sdw-truncate=true]');
    if (trunkContainer) {
      // @ts-ignore
      const elipse = trunkContainer.dataset.sdwElipse;
      // @ts-ignore
      const textLength = trunkContainer.dataset.sdwLength;

      if (elipse && textLength) {
        let truncated = TrunkText({
          elipseChar: elipse,
          textLength: Number(textLength),
        });
        if (truncated.errors.length) {
          truncated.errors.forEach((error) => {
            console.log(error.message);
          });
        }
      } else {
        errors.push({
          message: 'No data-sdw-elipse or data-sdw-length HTML Element Found',
        });
      }
    } else {
      errors.push({
        message: 'No data-sdw-truncate=true HTML Element Found',
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
