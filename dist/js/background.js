// alert('laksjdas');

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "title": "You clicked a link!",
    "message": message.url
  });
}