document.addEventListener("contextmenu", (event) => {
  let el = event.target;

  if (el instanceof HTMLSelectElement) {
      // Only get the selected option
      window._lastRightClickedElement = el.options[el.selectedIndex];
  } else {
      window._lastRightClickedElement = el;
  }
}, true);
