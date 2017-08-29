# Use case specification: Start Chat Thread

*Date: [2017-08-29]*

## 1. Description

  The specification describes how a user creates a new thread.

## 2. Basic Flow of Events

  The use case begins when the user access the application

  1. User clicks "new message" icon.
  2. Redirection to chat thread creation (maybe popup?).
  3. User enter name of friend to add in the search field.
  4. Clicks friend from search result.
  5. Click "finish" button.
  6. Chat thread is available at list (maybe redirect to that chat thread?)
  7. The use case ends

## 3. Alternative Flows

### 3.1 Create Group Chat
  If at step 4 the user wants to add more than 1 friend.

  1. Complete step 3 and 4 again in the basic flow
  2. Repeat until all desired friends are added to the chat thread.
  3. The use case resumes at step 5.

## 4. Post-conditions
  The user did successfully create a chat thread with desired amount of friends.