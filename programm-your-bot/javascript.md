# JavaScript Demo Bot

How to create an JavaScript Discord Bot with discord.js

> [!Note]
> This guide uses Visual Studio Code.

## Installation

» Download an IDE of your choice, preferably Visual Studio Code you can download it [here](https://code.visualstudio.com/download/).

» Finish installing the programme to your pc and open it when you are done.

## Configuration

» Make sure you have Node.js v16.9.0 or higher set up on your device. If you don't, download it [here](https://nodejs.org/en/).

» Create a new project.

» You can set a few more settings if you want like the location of your project

» When you are done click finish.

## Library set up

» Open a VSC Terminal in the uper left corner

» With the terminal open, run the `node -v` command to make sure you've successfully installed Node.js. If it outputs v16.9.0 or higher, great!

» `npm init` is the next command you'll be running. This command creates a `package.json` file for you, which will keep track of the dependencies your project uses, as well as other info

» Now that you've installed Node.js and know how to open your console and run commands, you can finally install discord.js! Run the following command in your Terminal: `npm install discord.js`

## Example Bot

» Clear the main file you should see now. This will be used to register the bot.

» Now add this code to the `index.js` file

```js
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
// Require the necessary discord.js classes

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// Create a new client instance

client.once('ready', () => {
	console.log('c:');
});
// When the client is ready, run this code (only once)

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login(token);
// Login to Discord with your client's token
```

» For the Commands you'll need to install `@discordjs/rest`, you can do than with `npm install @discordjs/rest`

» Next we will create the events. Create a `deploy-commands.js` and add this code

```js
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
```

After that you have to add `"clientId": "clientIDyours", "guildId": "guildeIDyours",` to your config.json file

## Final

» Upload the files to the Karlo-Hosting Panel ans start the Server.
