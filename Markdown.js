const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdownText);
    markdownOutput.innerHTML = html;
});