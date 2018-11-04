
## Some information before you begin
You need the following software installed in you computer:<br/>
  Git [GitHub Desktop - Windows](https://desktop.github.com/)<br/>
  Editor [Visual Studio Code](https://code.visualstudio.com/)<br/>
  Node.js [Long Term Support - Windows](https://nodejs.org/dist/v10.13.0/node-v10.13.0-x64.msi)<br/>

In order to work with this project you should start by having a "buy-anywhere" folder in your system (preferable in c:\buy-anywhere\), inside you can execute <br/>
  git clone https://github.com/maximilianotopp/buy-anywhere-front-end.git

## Rules
- There should be NO changes to MASTER branch. Changes are only made by Aproving a Pull-Request and merging a development branch to master
- When you start working on a Story / Task you should create a branch with the following naming convention:
  <feature or bug>/<task-id>-<change-description>
  Example:
    Let's assume that we have a task FE-001 that states the following: "As a user I want the logo of the app to be shown in the right corner of the screen"
    Then the branch name will be "feature/FE-001-place-app-logo"
- You should try to commit your changes as often as possible (this avoids undoing a lot of code when you blow something up)
- ALWAYS add a description to your commits
- Once your work is finished (Your application compiles, you had tested it and you merged the master branch into your branch!!!), you upload all changes to the repository and create a Pull Request and assign someone to it (we will assign everyone to the PR so that everyone can see the changes)
- The only person allowed to aprove a PR (Pull Request) is the tech leader (just at the begining, don't get mad, yes, I'm talking specially to you...)

# Have Fun!!

## Some words from facebook team

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` DO NOT EXECUTE THIS!!!

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
