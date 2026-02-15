chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed successfully.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GREETING") {
    console.log("Background received:", request.payload);
    sendResponse({ status: "Success", message: "Hello from Background!" });
  }
  return true; 
});
