# Google Maps Right-Click Extension

**Description:**  
This Firefox extension allows you to search the text of any element on a webpage directly in Google Maps via the right-click context menu. It works with normal elements, lists, spans, divs, and `<select>` dropdowns (selects only the currently selected option).

---

## Features

- Right-click any element → select **"Search text in Google Maps"**
- Automatically detects selected `<option>` in dropdowns
- Opens Google Maps in a new tab with the element text as a query
- Works on virtually any webpage

---

## Installation (Developer / Temporary)

1. Clone or download the extension folder.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **"Load Temporary Add-on"**.
4. Select the `manifest.json` file in the extension folder.
5. Right-click elements on any page to test the functionality.