(() => {
  let isHidden = false;

  // Create the fullscreen toggle button
  const button = document.createElement("div");
  button.innerText = "⛶";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "40px";
  button.style.height = "40px";
  button.style.background = "black";
  button.style.color = "white";
  button.style.borderRadius = "50%";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.cursor = "pointer";
  button.style.zIndex = "10000";
  button.style.fontSize = "20px";
  button.title = "Toggle Fullscreen";

  button.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  // Load user settings
  chrome.storage.sync.get("hideIcon", (data) => {
    if (!data.hideIcon) {
      document.body.appendChild(button);
    }
  });

  // Listen for settings changes
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.hideIcon) {
      if (changes.hideIcon.newValue) {
        button.remove();
      } else {
        document.body.appendChild(button);
      }
    }
  });
})();
