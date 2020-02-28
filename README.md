# IDEAS Portfolio Template

This portfolio template was created to serve as a template for IDEAS minors completing the Computer Module at Wesleyan University. It is built using React, a useful Java Script framework with far more capabilities than used here. To learn more about React, check out the [React documentation](https://reactjs.org/). The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and the default documentation remains below.

## Guidelines

This template was created in 2020 and is meant to be updated. While it is perfectly acceptable to fork the template, add your projects, and move on, consider making a small contribution to the template. Squash a few bugs. Add new component. Create new page templates. Any new improvements that future IDEAS students can use will be appreciated. Additionally, you can count this as one of your projects, and working with an existing codebase is an essential skill in most industry jobs.

## Getting Started

### Creating a New Portfolio

1. Create and login to a GitHub account.
2. Navigate to this [project](https://github.com/NathanaelMathieu/IDEAS-Portfolio-Template) and select `Fork` in the top right. This will create your own remote version of the template that you can freely edit without affecting the original.
3. Rename the new repository as desired, at a minimum removing `Template`.
4. Install [npm](https://www.npmjs.com/get-npm) in your development environment.
5. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
6. Open a terminal and navigate to the directory you want your portfolio to be stored in. Taking care to replace the link with the repository created in Step 2, run `git clone https://github.com/USERNAME/REPOSITORY_NAME.git`. This will create a local copy of the repository.
7. Navigate to the newly created folder. You should see all the files and folders listed on the GitHub Page.
8. Run `npm install` in the project directory to install dependencies.

You are all set! All the scripts below should run successfully.

### Portfolio Template Updates

If you would like to make changes to the original Portfolio Template:

1. Commit the changes you would like to make to the Template.
2. Run `git remote -v` to see the remote branches.
3. Run `git push upstream master` where upstream is the corresponding remote branch.

Similarly, if you would like to get changes to the Portfolio Template that were made after you forked your portfolio, run `git pull upstream master` where `upstream` is the corresponding remote branch.

## Available Scripts (Mostly from create-react-app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

### `npm run deploy`

Creates or pushes to a new `gh-pages` branch of the project. This branch is used as the source code for the public `github.io` page of the project.

If deploy is not working, confirm that the `homepage` property in package.json is set correctly. You may also need to create a .env file in the main directory and add the global variable `PUBLIC_URL` with the same value as `homepage`.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
