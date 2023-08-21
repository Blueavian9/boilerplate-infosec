module.exports = app;
const api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

/*
install and Require Helmet - Information Security with HelmetJS - Freecodecamp.org
left off: 06:20 /24:36
IMPORTANT TIP:
how to deploy a node.js app for free

 help you deploy a Node.js app for free! Here's a step-by-step guide to get you started:

1. CHOOSE A HOSTING PLATFORM:
There are several hosting platforms that offer free plans for deploying Node.js apps. Some popular options include Heroku, Glitch, and Netlify. For this guide, I'll use Heroku as an example.

2. SET UP A HEROKU ACCOUNT: 
If you don't have a Heroku account, sign up for one at https://signup.heroku.com/. Once you're logged in, you'll be able to create new apps.

3. INSTALL HEROKU CLI:
Heroku offers a command-line interface (CLI) that you can use to manage your apps. Download and install the Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli.

4. PREPARE YOUR Node.js APP:
Make sure your Node.js app is well-structured with a package.json file. This file should include your app's dependencies and scripts. You can create one by running npm init in your app's root directory.

5. INSTALL DEPENDENCIES:
Ensure that your app's dependencies are listed in your package.json file. Run npm install to install these dependencies.

6. CREATE A GIT REPOSITORY:
If your app isn't already in a Git repository, initialize one with the command git init. Commit your code to the repository.

7. LOGIN TO HEROKU:
Open your terminal and run heroku login to authenticate your Heroku account.

8. CREATE A HEROKU APP:
Navigate to your app's directory in the terminal and run heroku create to create a new Heroku app. This will also add a remote called "heroku" to your Git repository.

9. DEPLOY YOUR APP:
To deploy your app to Heroku, simply run git push heroku master. This will push your code to Heroku's servers and trigger the deployment process.

10. OPEN YOUR APP:
Once the deployment is successful, you can open your app by running heroku open.

11. CONFIGURE ENVIRONMENT VARIABLES:
If your app requires environment variables (such as API keys or database URLs), you can configure them in Heroku. Use the command heroku config:set KEY=VALUE to set environment variables.

12. SCALING AND MONITORING:
You can use Heroku commands to scale your app and monitor its performance. For example, you can scale your app's dynos using heroku ps:scale web=1.

Remember that while these steps are focused on Heroku, the process is somewhat similar across other hosting platforms as well. Each platform might have its own specific commands and configurations, so make sure to consult their documentation.

Lastly, it's important to stay security-conscious during this process. Ensure that your app and dependencies are up-to-date to prevent vulnerabilities. Additionally, follow best practices for securing environment variables and sensitive information.

Feel free to reach out if you have any questions or need further assistance!

*/
