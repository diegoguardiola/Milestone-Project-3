# Milestone-Project-3
# Password Journal App - PJA

## Team members

 Adeshvir

 Jason

 Diego

 Stephen
 
 Andres

## Project Description 

This project will be a MERN application that will focus working with React, Node, Express, Mongoose, and mongoDB. The PJA app requires authentication and  will be a dictionary that will showcase the user's alloted website link, associated email/username, and password that they log with the app.

## App Logic

The PJA app has three main parts: the first is Page#1 the LOGIN and SIGNUP Page. This page will be the front face of the app and will display a form that will show prompt the user to enter an email and password. If the user does not have an account there is a SIGNUP link at the bottom of the form that will redircet the user to Page2. This page is where the user is prompted to enter their name, email, and master password(this will be utilized throughout the app).Once the user clicks on the CREATE button, all of this information will be pushed to the mongoDB database. This page utilizes the GET and POST routes which shows the form, and pushes the form's entries to mongoDB, and there will be a popup indicating to the user that the submission was successful. Then the user will be redirected to Page#1 where they will be prompted to enter their email and master password. Once the app authenticates the user they will be abled to login then they will come across Page#3. Page#3 will display a form that will prompt the user to enter a webiste link, associated email/username, and password. Once the user clicks on submit, this page utilizes the GET and POST routes which shows the form, and pushes the form's entries to mongoDB and there will be a popup indicating to the user that the submission was successful. Once this happens, the associated email and website link alongside the password which is hashed will populate down below the journal form. There will be another form that will prompt the user to enter the master password and this will display all the passwords from hashed to not hashed. In order to check that this user has these passwords, emails, and links associated to them. The models will authenticate and authorize if the userid is the right one and will garner the information back to the user(reference BREADCRUD project). Lastly the user will have the options to UPDATE or DELETE the information they posted.


## MVP
- App should be able to create user account.

- App should be able to authenticate user and let them log in.

- Once user clicks on password journal form, they should be able to submit their website link, associated username/email, and password.

- Once the form is submitted the information should populate down below with the password hashed.

- Once user enters master password, app should authorize them to have access to all the passwords.

- App should allow user to update or delete entries.



## Post-MVP
- Make it mobile with React Native

- Use APIS to utilize different functionality