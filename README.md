# ZionDash
**A NodeJS Panel to easily manage your nodejs projects.**

# Join our [Discord server](https://officieelmika.nl/discord) for more information and ideas for the project.

## Features

- Windows and Linux support
- You can run all types of nodejs projects
- Project import (zips)
- Panel to start/stop your projects and see their consoles
- All data is saved to a local SQLite3 database `data/database.sqlite3`
- Customized console logging system
- Logging console data to a log file `data/console.log`
- User acounts
- Administrator panel to manage submissions and other options

## What do we prefer

- Using an 64-bit Linux system, 32-bits is possible, but it may not work with your NodeJS version.
- Windows XP - 11 are supported, 32-bits/64-bits.
- An good network connection.
- Older systems may not run the panel smoothly:
- minimal 500MB, you may prefer more ram for your projects to let it run smooth.

**NOTE THAT SOME DISTRO'S HAVE DROPPED SUPPORT. THEY MAY NOT BE ABLE TO RUN THE REQUIRED NODEJS VERSION ANYMORE, SEE NODEJS.ORG FOR THE LATEST LTS VERSION, WE PREFER THIS TOO.**

## How to setup

1. Download the panelfiles with `git clone https://github.com/ZionMediaOfficial/ZionDash/`
2. Open the folder of the panel (where `index.js` is stored);
3. run `npm install ` to install all the node modules;
4. run `node .` to start the project for the first time;
5. Anwser the questions in the terminal to set everything up;

#  Checking if the panel is up

- Go to `localhost:8080` or enter your public/serverip:8080 to access it.
- you can change the port in `config.json`

## How to run a project on the panel

- Login with your account
- Click on "Submit project" button on the dashboard
- Enter all the details and upload a zip folder with the code of your project
- Click on the "Submit" button
- If you don't have administrator permissions you have to wait before your project is approved
# FOR ADMINS

- Go to the `submissions` tab on the admin panel
- Click on the submission of the project
- Click on the `Approve` (to let the project work) or `Reject` (to delete the submission) button
- If the submission is approved you can start your project for the first time

## TO DO

- Add preview images of the panel

# Join our [Discord server](https://officieelmika.nl/discord) for more information and ideas for the project.
