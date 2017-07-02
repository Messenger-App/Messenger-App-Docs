# Use case specification: Login

*Author: Caroline Nilsson*

*Date: 2017-06-30*

## 1. Description

  The specification describes the login possibilities, both for first time login and for stored login sessions.

## 2. Basic Flow of Events

  The use case begins when the user opens the Messenger Application.

  1. In this case there is no previous session available.
  2. The user is redirected to login page.
  3. Facebook username and password is entered by the user.
  4. User clicks “Ok/Login?”, in this case the information is always correct.
  5. User’s active threads, friends list etc. becomes available to the user.
  6. The use case ends

## 3. Alternative Flows

### 3.1 Previous session (continue)
  If at step 1 there is a previous session available, the user can choose to continue or to login with a different account.

  1.	User choose to continue
  2.	The use case resumes at step 5.

### 3.2 Previous session (different account)
  If at step 1 there is a previous session available, the user can choose to continue or to login with a different account.

  1.	User choose to login with a different account.
  2.	The use case resumes at step 2.

### 3.3 Incorrect login information
  If at step 4 the login information is incorrect

  1.	An error message shows to the user.
  2.	The use case resumes at step 3.

## 4. Post-conditions
  The user successfully logged in to the Messenger Application and can access their Facebook information connected to the Application.
