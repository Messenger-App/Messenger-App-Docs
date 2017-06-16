# Suggestions for use cases

+ **Log in**

    We need to make sure this works even if two-factor authentication is activated and that we avoid storing the password if 
    at all possible. We also need a way to store the session so the user does not need to login every time the application is 
    restarted. (Should be possible to do without storing the user password by 
    [saving the AppState](https://www.npmjs.com/package/facebook-chat-api#saving-session).)
  
---

+ **Log out**

    When the user logs out, the log in page should be displayed again so another user can log in.
  
---  
  
+ **Send a message**

    The user should be able to send a message in an existing chat thread as well as sending a message to a contact for which 
    no chat thread yet exists, which should automatically create a new chat thread.

---

+ **Get a notification when a message is received**

    The notification could include a sound if the message is received when the application is opened. If it is running in the
    background, we should change the tray icon to give an indication that something new has happened. We can also consider 
    using the notification systems available in the Windows/Mac/Linux to display a notification popup. (Only when the 
    application runs in the background of course).

---

+ **View a list of all chat threads**

    The main view of the application should probably contain a list of all chat threads from where the user can select which
    chat to look at.

---

+ **View a chat thread**

    One thing we need to consider here is that emojis are rendered properly.

---

+ **Start a new chat thread**

---

+ **Add a friend to chat thread**

---

+ **Leave a chat thread**

---

+ **Delete a chat thread**

    Remove a chat thread from the user's account.

---

+ **Accept/Block/Ignore message from person which is not a friend**
    
    - Accept accepts that the user receives this and future messages from the sender.
    - Block rejects the message and blocks the sender from sending future messages.
    - Ignore rejects the message but does not block the sender from sending future messages.
    
---

+ **Send a message with emojis**

---

+ **Send a picture in a message**

---

+ **Send a file in a message**

---

+ **Send a message with a hyperlink**

---
