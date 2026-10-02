const copyButton = document.getElementById('copy-bibtex');
const citation = document.getElementById('bibtex');
const status = document.getElementById('copy-status');

copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    status.textContent = 'Citation copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (Windows) or ⌘C (Mac) to copy.';
  }
});
