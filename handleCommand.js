const handleData = require("./handleData");

const handleCommand = ({ add, remove, list }) => {
  //   console.log(add, remove, list);
  if (add) {
    console.log("Adding in process...".green + "\n" + "...".green);
    if (typeof add !== "string") {
      return console.log("Error!!! String must be provided".red);
    } else if (add.length < 7) {
      return console.log(
        "Error!!! Task name too short... Provide at least 7 characters".red
      );
    }
    handleData(1, add);
  } else if (remove) {
    console.log("removing...".green);
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log("Error!!! Task not found".red);
    }
    handleData(2, remove);
  } else if (list || list === "") {
    console.log("preparing to print...".green);
    handleData(3, list);
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

module.exports = handleCommand;
