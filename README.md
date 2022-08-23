# OMM-Panel
A NodeJS Panel to easily manage your nodejs projects.

## Features
- Windows and Linux support (Mac not officialy)
- You can run all types of nodejs projects
- File upload system
- Panel to start/stop your projects and see their consoles
- All data is saved to a local SQLite3 database `data/database.sqlite3`
- Customized console logging system
- Logging console data to a log file `data/console.log`
- Accounts
- Administrator panel to manage all the projects

## How to setup
1. Download the panelfiles with `git clone https://github.com/OfficieelMika/OMM-Panel/`
2. Open the folder of the panel (where `index.js` is stored);
3. run `npm install ` to install all the node modules;
4. run `node .` to start the project for the first time;
5. Anwser the questions in the terminal to set everything up;

#  Checking if the panel is up
- Go to `localhost:8080` or enter your public/serverip:8080 to access it.

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
- Preview images of the panel will be added soon!
# https://dsc.gg/ommedia for more information and ideas for the project.
