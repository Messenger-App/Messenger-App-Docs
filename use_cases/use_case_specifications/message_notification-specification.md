# Use case specification: Message Notification

*Date: [2017-08-29]*

## 1. Description

 The specification describes different notifications that will occur when the user receives a message.

## 2. Basic Flow of Events

 The use case begins when the user receives a message

 1. If the application is open (in this case it is) the user receives a sound and the chat thread with unread messages is marked.
 2. The use case ends

## 3. Alternative Flows

### 3.1 Application is closed/tabbed
 If in step one the application is closed or tabbed (application window is not visible)

 1. The user receives a sound and the application icon receives a marking.
 2. The user opens the application and chat thread with unread messages is marked
 3. The use case ends

## 4. Post-conditions
 The user was successfully notified about a received message.