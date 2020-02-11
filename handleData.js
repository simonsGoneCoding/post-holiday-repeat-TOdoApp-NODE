const colors = require("colors");
const fs = require("fs");

const handleData = (type, title) => {
  console.log("handling data...".green);
  //type - number (1 - add, 2 - remove, 3 - list)
  //title (string || null)
  const data = fs.readFileSync("db.json");
  const tasks = JSON.parse(data);
  // console.log(tasks);
  if (type === 1 || type === 2) {
    const doesExist = tasks.find(task => task.title === title) ? true : false;
    if (type === 1 && doesExist) {
      return console.log("Error! Task already added to list!".red);
    } else if (type === 2 && !doesExist) {
      return console.log("Error! Task not found!".red);
    }
  }

  let dataJSON = "";
  switch (type) {
    case 1:
      //reset for id numbers (bug fix)
      tasks.forEach((task, index) => {
        task.id = index + 1;
      }); // gug fix
      const id = tasks.length + 1;
      tasks.push({ id, title });
      // console.log(tasks);
      dataJSON = JSON.stringify(tasks);
      // console.log(dataJSON);
      fs.writeFileSync("db.json", dataJSON);
      console.log(`"${title}" successfully added to list`.black.bgGreen);
      break;

    case 2:
      const index = tasks.findIndex(task => task.title === title);
      tasks.splice(index, 1);
      // id bug fix
      tasks.forEach((task, index) => {
        task.id = index + 1;
      });
      // id bug fix
      dataJSON = JSON.stringify(tasks);
      fs.writeFile("db.json", dataJSON, "utf8", err => {
        if (err) throw err;
        console.log("database updated".green);
      });
      console.log(`"${title}" successfully removed from list`.black.bgGreen);
      break;

    case 3:
      console.log(`list containing ${tasks.length} tasks as follows:`.green);
      if (tasks.length) {
        tasks.forEach((task, index) => {
          if (index % 2) {
            console.log(task.title.black.bgGreen);
          } else {
            console.log(task.title.black.bgWhite);
          }
        });
        process.exit();
      } else {
        console.log("List empty... No tasks to print...".green);
      }
      break;
  }
};

module.exports = handleData;
