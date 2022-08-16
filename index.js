const setup = require("./src/setup");
setup.createConfig();

const dbManager = require("./src/databaseManager");
const accountController = require("./src/account/controller");
const projectController = require("./src/project/controller");
const projectConsole = require("./src/project/console");
const system = require("./src/utils/system");
const terminator = require("./src/utils/terminator");
const config = require("./config.json");
const logger = require("./src/utils/logger");

enable();

async function enable() {
    process.on("uncaughtException", (err) => {
        if (config["error-trace"]) {
            logger.emergency(err.stack);
        } else {
            logger.emergency(err);
        }

        kill();
    });

    await setup.createFiles();

    logger.custom("---------------------------------------------", true);
    logger.info("Starting the panel...");

    logger.debug(`Operating System (OS) ${process.platform} detected.`)

    if (!system.valid()) {
        logger.warn(`The OS: (${process.platform}) is not supported, please use a supported operating system: (${system.supported})`);
        kill();
        return;
    }

    await dbManager.connect();
    await projectController.setup();
    await projectConsole.start();
    await accountController.setup();
    var accounts = await accountController.getAll();
    if (accounts.length <= 0) {
        logger.warn("No accounts found in the database!");
        setup.createAccount(function () {
            startServer();
        });
        return;
    }

    startServer();
}

function startServer() {
    terminator.add("main", module.exports);
    const server = require("./src/server");
}

/**
 * Kill the server
 */
function kill() {
    logger.info("Stopping the server...");
    process.kill(process.pid);
}

module.exports = {
    kill
}