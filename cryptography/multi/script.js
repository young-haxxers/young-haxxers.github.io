async function copyToClipboard(textToCopy) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log('Text copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

// Example usage:
const text = 'This is the text to be copied.';
copyToClipboard(text);
