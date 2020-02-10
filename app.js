const parseArgs = require("minimist");
const colors = require("colors");

const command = parseArgs(process.argv);
delete command._;

// console.log(command);

const handleCommand = ({ add, remove, list }) => {
  //   console.log(add, remove, list);
  if (add) {
    console.log("Adding in process...".green + "\n");
    if (typeof add !== "string") {
      return console.log("Error!!! String must be provided".red);
    } else if (add.length < 7) {
      return console.log(
        "Error!!! Task name too short... Provide at least 7 characters".red
      );
    }
    handleData();
  } else if (remove) {
    console.log("removing...");
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log("Error!!! Task not found".red);
    }
    handleData();
  } else if (list || list === "") {
    console.log("printing list...".green);
    handleData();
  } else {
    console.log(
      "Error!!! Command not recognised...".red +
        "\n" +
        "Use one of the following:".red +
        "\n" +
        '--add="name of task",'.red +
        "\n" +
        '--remove="name of the task",'.red +
        "\n" +
        "--list".red
    );
  }
};

const handleData = () => {
  console.log("handling data");
};

handleCommand(command);
