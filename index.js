const inquirer = require('inquirer');
const fs = require('fs');

//This is a dating profile page generator, we need to ask some quesitons with inquirer
//using inquirer to ask questions and get answers
inquirer
  .prompt([
    /* Pass your questions in here */
    //question 1
    {
        type: "input",
        name: "fullname",
        message: "What is your name?"
    },
    //question 2
    {
        type: "number",
        name: "userAge",
        message: "How old are you?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description about yourself."
    },
    //question 3
    {
        message: "What kind of girls do you prefer?",
        type: "checkbox",
        name: "preference",
        choices: ["Blondes", "Latinas", "Asians", "Black Girls", "Redheads", "BBW"]
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
    createProfilePage(answers)
  })
  .catch(error => {
    console.log(error)
  });

function createProfilePage(answers){
    fs.writeFile("profile.html", `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>${answers.fullname}'s Page</title>
</head>
<body>
    <div class="jumbotron">
        <h1>Hi, My name is ${answers.fullname}, I am ${answers.userAge} years old.</h1>
    </div>
    <div class="card ml-5" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Hello_kitty_character_portrait.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${answers.fullname}</h5>
          <p class="card-text">${answers.description}</p>
          <a href="#" class="btn btn-primary">I like me some ${answers.preference}.</a>
        </div>
      </div>
</body>
</html>`, function(err){console.log(err || "success!")})
}
//we need to generate a dating profile page using the answers user provided
//we will need fs