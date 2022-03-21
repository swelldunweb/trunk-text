import type { TrunkTextType } from './TrunkTextTypes';

export function TrunkText({ elipseChar, textLength }: TrunkTextType) {
  let errors = [];
  const container = document.querySelector('#sdw-trunk-container');
  if (container) {
    const items = container.querySelectorAll('.sdw-trunk-item');
    if (items) {
      items.forEach((item) => {
        let textNode = item.querySelector('.sdw-trunk-text');
        if (textNode) {
          let text = textNode.innerHTML;
          if (text.length > textLength) {
            let trunkText = `${text.substring(0, textLength)}${elipseChar}`;
            textNode.innerHTML = trunkText;
          }
        } else {
          errors.push({
            message: 'No Items Found with .sdw-trunk-text Class',
          });
        }
      });
    } else {
      errors.push({
        message: 'No Items Found with .sdw-trunk-item Class',
      });
    }
  } else {
    errors.push({
      message: 'No Container Found with #sdw-trunk-container ID',
    });
  }

  return { done: true, errors: errors };
}
