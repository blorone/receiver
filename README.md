# Messaging Receiver
This is a simple HTML page designed to act as a receiver for messages using the postMessage mechanism in JavaScript.  
It can be embedded within an <iframe> to receive messages from a parent window.

## Usage
1. Open the index.html file in a web browser.

2. The page will display "Receiver" as the heading and "Iframe Page Domain:" indicating the domain of the page embedded through an <iframe>.

3. When a message is sent from the parent window using the postMessage method, the message content will be displayed in the "Message" section of the page.

## Files
- index.html: HTML file containing the structure of the page.
- styles.css: CSS file with styles for the page elements.
- script.js: JavaScript file handling the message reception and domain display logic.

## How it Works
- The page listens for the `message` event and executes the `readMsg` function when a message is received.  
- The `readMsg` function checks the origin of the message, and if it matches 'http://localhost', it updates the content of the "Message" section with the received data.   
- The domain of the embedded page is displayed in the "Iframe Page Domain" section.
## Important Note
For security reasons, the origin of the message must match the expected origin (in this case, 'http://localhost').  
This helps prevent malicious scripts from sending unauthorized messages.
