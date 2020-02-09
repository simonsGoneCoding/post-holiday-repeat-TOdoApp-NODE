const parseArgs = require("minimist");

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

console.log(command);

const handleCommand = ({ add, remove, list }) => {};
