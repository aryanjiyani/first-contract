# first-contract
Setting up a project
TIP

If you are using Windows, we strongly recommend using WSL 2 to follow this guide.

Hardhat projects are Node.js projects with the hardhat package installed and a hardhat.config.js file.

To initialize a Node.js project you can use npm or yarn. We recommend using npm 7 or later:

npm 7+
npm 6
yarn
npm init -y
Then you need to install Hardhat:

npm 7+
npm 6
yarn
npm install --save-dev hardhat
If you run npx hardhat now, you will be shown some options to facilitate project creation:

$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888


Welcome to Hardhat v2.10.0

? What do you want to do? …
▸ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
If you select Create an empty hardhat.config.js, Hardhat will create a hardhat.config.js like the following:

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
And this is enough to run Hardhat using a default project structure.

#Sample Hardhat project
If you select Create a JavaScript project, a simple project creation wizard will ask you some questions. After that, the wizard will create some directories and files and installthe necessary dependencies. The most important of these dependencies is the Hardhat Toolbox, a plugin that bundles all the things you need to start working with Hardhat.

The initialized project has the following structure:

contracts/
scripts/
test/
hardhat.config.js
These are the default paths for a Hardhat project.

contracts/ is where the source files for your contracts should be.
test/ is where your tests should go.
scripts/ is where simple automation scripts go.
If you need to change these paths, take a look at the paths configuration section.

#Testing
When it comes to testing your contracts, the sample project comes with some useful functionality:

The built-in Hardhat Network as the development network to test on, along with the Hardhat Network Helpers library to manipulate this network.
Mocha as the test runner, Chai as the assertion library, and the Hardhat Chai Matchers to extend Chai with contracts-related functionality.
The 
ethers.js
 library to interact with the network and with contracts.
As well as other useful plugins. You can learn more about this in the Testing contracts guide.

#External networks
If you need to use an external network, like an Ethereum testnet, mainnet or some other specific node software, you can set it up using the networks configuration entries in the exported object in hardhat.config.js, which is how Hardhat projects manage settings.

You can make use of the --network CLI parameter to quickly change the network.

Take a look at the networks configuration section to learn more about setting up different networks.

#Plugins and dependencies
Most of Hardhat's functionality comes from plugins, so check out the plugins section for the official list and see if there are any ones of interest to you.

To use a plugin, the first step is always to install it using npm or yarn, followed by requiring it in your config file:

TypeScript
JavaScript
import "@nomicfoundation/hardhat-toolbox";

export default {
  solidity: "0.8.9",
};
Plugins are essential to Hardhat projects, so make sure to check out all the available ones and also build your own!

#Setting up your editor
Hardhat for Visual Studio Code is the official Hardhat extension that adds advanced support for Solidity to VSCode. If you use Visual Studio Code, give it a try!
