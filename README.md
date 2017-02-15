# TypeScript-UserApp-Server
In this project we will provide a npm-based setup to write the server part of a [UserApp](https://developer.knuddels.de/) in [TypeScript](https://www.typescriptlang.org/) and compile it to JavaScript that runs on our UserApp servers.

# Dependencies
Since we use [npm](https://www.npmjs.com/get-npm) to manage the tools we need you have to install the newest stable version of [Node.js](https://nodejs.org/) first before you can start.

# How does it work?
Just clone this repository or copy everything to the desired place on your computer. Since there is already some code for a lovely TypeScript demonstration app already in this repository, you can instantly start compiling something!
- open a terminal/commandline in the directory where all the files are now
- run `npm install` and wait for everything to be installed
- run `npm run build-server` to actually compile the dummy app
- a "main.js" file will be created
- Tada!

# How to test it?
Now you just have to follow the usual [UserApp deployment process](https://bitbucket.org/knuddels/user-apps/wiki/DeineErsteApp).

# Notice: TypeScript declaration file update
Since we dont't yet have a automated process to deploy the TypeScript declaration file to npm, you have to update it manually. You should do this every time we change something in the UserApp API. You can follow the [UserApps Changelog](https://blog.knuddels.de/changelog/).
It is referenced on our [Developer Portal](https://developer.knuddels.de/), or you can get it [directy here](https://developer.knuddels.de/docs/UserApps-API.d.ts).
