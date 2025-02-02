document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleIcon");

  chrome.storage.sync.get("hideIcon", (data) => {
    button.textContent = data.hideIcon ? "Show Icon" : "Hide Icon";
  });

  button.addEventListener("click", () => {
    chrome.storage.sync.get("hideIcon", (data) => {
      const newValue = !data.hideIcon;
      chrome.storage.sync.set({ hideIcon: newValue }, () => {
        button.textContent = newValue ? "Show Icon" : "Hide Icon";
      });
    });
  });
});
