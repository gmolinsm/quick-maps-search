// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search-google-maps",
    title: "Search text in Google Maps",
    contexts: ["all"]
  });
});

// On menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-google-maps") {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          // PRIORITY: user selected text
          const selection = window.getSelection().toString().trim();
          if (selection) return selection;

          // Otherwise, fall back to right-clicked element
          let el = window._lastRightClickedElement;
          if (!el) return "";
          if (el instanceof HTMLOptionElement) return el.label || el.textContent || "";
          return el.innerText || el.textContent || "";
        }
      },
      (results) => {
        if (!results || !results[0] || !results[0].result) return;
        const text = results[0].result.trim();
        if (!text) return;
        const url = "https://www.google.com/maps/search/" + encodeURIComponent(text);
        chrome.tabs.create({ url });
      }
    );
  }
});
