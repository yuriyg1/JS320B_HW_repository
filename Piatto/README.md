# Intro
Piatto - a Yelp style food App that no one asked for, but I have put together in React.

# Important note
If you are having Error 403 after successfully submitting a search, please request temp access to the HeroKu demo server:
https://cors-anywhere.herokuapp.com/corsdemo

If you are having issues with the API Key, its hidden in the .env.local, and should be Git Ignored, but I could provide over Canvas. App will be deployed on FireBase.

# Usage
On App initiation, the user will see a looping salad gif and a floating nav bar with 4 components: User Profile, People Icon, Fire Icon, Search Icon.

The user would press on the Search Icon, which changes the nav bar to display a CloseOut button, Review Star selector, Search field and Location field inputs, and a Search button. Both text input fields are required to submit a Yelp API fetch.

The user would input a Search term and a location term to submit a search. 

The review stars are optional, but the idea is the minimum star count selected by the user would filter out any restaurants/places that have a lower rating than allowed by the user. I'm using the &min_rating selector to try and make this filter per rating, however I'm not sure if Yelp has dropped this funtionality, they don't have it in their FusionAPI pages, but the internet speaks of such (previous) abilities to filter API searches by ratings. 

After submittal, a list of 10 places will appear on the left in restaurant card format, and a map of the locations on the right side of the page with red markers.

The restaurant card has a pressable heart icon, when pressed will add the restaurant to the User's fav list (not implemented due to time constraints), which is hidden under the User Profile button.

The Fire Icon will submit a 'trending' Yelp search (not implemented due to time constraints).

--------------- React Stuff ---------------

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
