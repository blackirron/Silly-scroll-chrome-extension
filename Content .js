console.log("Content script injected and running.");

chrome.runtime.sendMessage(
  { type: "GREETING", payload: "Hi Background, I'm the page script!" },
  (response) => {
    console.log("Response from Background:", response.message);
  }
);

document.body.style.border = "5px solid #4285F4";
