# GIROVAGANZO PORTFOLIO
#### 👉 https://portfolio.girovaganzo.bike

Simply, my portfolio. A small area to archive the past, observe the present and study the future. <br>

### Developed with:
- [PhpStorm](https://www.jetbrains.com/phpstorm/)
- [React JS](https://reactjs.org/)
- [Bulma SCSS](https://bulma.io)

---

## Project Structure

```
--- public
> The public folder in witch the project is deployed
--- src
------ assets/
> The folder that stores static file & content
--------- fonts/
--------- icons/
--------- images/
------ components/
> The folder that stores all react components
---------- elements/
> Elements are all the components that can easily reuse everywhere in the app
---------- modules/
> Modules are a group of components that are frequently repeated on multiple pages such as Header, Footer, Sidebar,...
---------- sections/
> Sections is like modules, but referred to a specitic page (example: onepage site)
------ pages/
> Simply the pages of the website/app
------ scss/
> The folder that stores all app, components and pages styles
---------- config/
> The style configuration file in witch you can create mixin, init fonts, set variables and start creating your own style guide
------------- _bulma.scss
> The Bulma Framework inizialization & customization file
------------- _fonts.scss
> The inizialization file for the custom fonts stored in the 'assets' folder
------------- _mixin.scss
> Custom scss mixin & function
------------- _variables.scss
> Custom scss variables  
---------- elements/
> Styles relative to recurring elements like buttons, forms, texts, custom react elements,... 
---------- modules/
> Styles relative to react moudles (see 'modules' folder)
---------- pages/
> Styles relative to react pages (see 'pages' folder)
--- App.js
--- App.scss
--- index.js
```

---

## Project Roadmap

- [x] Static version
- [x] Init Git
- [ ] Original content
- [ ] Integrate with WordPress CMS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
