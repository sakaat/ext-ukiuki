const scripts = ["jquery.min.js", "lists.js"];
let i = 0;
appendScript();

function appendScript() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = chrome.runtime.getURL(scripts[i]);
    document.head.appendChild(script);

    if (++i < scripts.length) {
        script.onload = appendScript;
    }
}
