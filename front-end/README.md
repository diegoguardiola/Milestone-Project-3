# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Technical Information
This is the place to list all installation and setup instructions. It is quite common to have separate directions for separate parts of a project (front end, back end, etc)
Include information regarding the coding standards used in the project to ensure regularity between contributions.
Include directions concerning how to contribute to the project.

https://github.com/CodyNicholson/SD13-Advanced_Topics_Activities/tree/main/D6/1_Intro_AWS_monorepo_DONE/frontend/src


https://github.com/CodyNicholson/SD06-Backend-API-Activities/tree/main/D10/02-Breads_Project_DONE/models
Use this as an example for how the React Context can work so we can have the unique user ID to be a wrap around of our frontend

https://github.com/CodyNicholson/SD13-Advanced_Topics_Activities/tree/main/D6/1_Intro_AWS_monorepo_DONE/frontend/src
Another reference of how we can add the ContextProvider as a wrap around

https://legacy.reactjs.org/docs/context.html
Use this as a reference for as a wrap around for React Context after logging in with the unique user id


https://digitalskills.instructure.com/courses/8951/pages/activity-at-5-application-documentation?module_item_id=1238722


https://github.com/CodyNicholson/ISS_Tracking_Project/tree/master/etl_app
Learn to use an extra readme.md to save documentation in the Git project allowing collaborators to be caught up easier

USE nodemon index.js instead of the node index.js because server needs to update everytime. We were able to connect to server on 5/18/23.

In case if /back-end/.env file deletes again since it was added to .gitignore
API_URL=/m3
PROFILE_CONNECTION=mongodb+srv://diegoguardiola01:Mn5eWO3si9bEEFim@cluster0.f5airvu.mongodb.net/milestone3?retryWrites=true&w=majority

and also updated it to 
API_URL=/m3
PROFILE_CONNECTION=mongodb+srv://diegoguardiola01:Mn5eWO3si9bEEFim@cluster0.f5airvu.mongodb.net/milestone3?retryWrites=true
SECRET=aosjdflksjdfpo349tu58tu9874


After talking with Cody, he told us to to use virtuals in our schema to have the unique ID user to display their list of "secret" (sitename, emails, and passwords) when the their profile is brought up.


https://github.com/HackerUSA-CE/API-BreadCRUD-Part-2/blob/part16-6.8.13/models/bread.js
Using the same method that we used in BreadCRUD to show the breads and the baker that made the bread in the first place

https://github.com/HackerUSA-CE/API-BreadCRUD-Part-2/blob/part16-6.8.13/models/baker.js

https://mongoosejs.com/docs/tutorials/virtuals.html