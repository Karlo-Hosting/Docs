# JavaScript Demo Bot

How to create an JavaScript Discord Bot with discord.js

> [!Note]
> This guide uses Visual Studio Code.

## Installation

1. Download an IDE of your choice, preferably Visual Studio Code you can download it [here](https://code.visualstudio.com/download/).
1. Finish installing the program to your pc and open it when you are done.

## Configuration

1. Make sure you have Node.js v16.9.0 or higher set up on your device. If you don't, download it [here](https://nodejs.org/en/).
1. Create a new project.
1. You can set a few more settings if you want like the location of your project
1. When you are done click finish.

## Library set up

1. Open a VSC Terminal in the uper left corner
1. With the terminal open, run the `node -v` command to make sure you've successfully installed Node.js. If it outputs v16.9.0 or higher, great!
1. `npm init` is the next command you'll be running. This command creates a `package.json` file for you, which will keep track of the dependencies your project uses, as well as other info
1. Now that you've installed Node.js and know how to open your console and run commands, you can finally install discord.js! Run the following command in your Terminal: `npm install discord.js`

[Create your Discord Bot](./python/README.md#DiscordAppCreation ':include')

## Example Bot

1. Clear the main file you should see now. This will be used to register the bot.
1. Now add this code to the `index.js` file

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

3. For the Commands you'll need to install `@discordjs/rest`, you can do than with `npm install @discordjs/rest`
3. Next we will create the events. Create a `deploy-commands.js` and add this code

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

5. After that you have to add `"clientId": "clientIDyours", "guildId": "guildeIDyours",` to your config.json file

## Final

- Upload the files to the Karlo-Hosting Panel ans start the Server.
