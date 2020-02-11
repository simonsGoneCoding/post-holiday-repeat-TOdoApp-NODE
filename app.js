const parseArgs = require("minimist");
const handleCommand = require("./handleCommand");

const command = parseArgs(process.argv);
delete command._;

handleCommand(command);
