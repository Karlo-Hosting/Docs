# Python Demo Bot

How to create a Python Discord Bot with py-cord

> [!NOTE]
> This guide uses PyCharm.

## Installation

» Download an IDE of your choice, preferably PyCharm you can download it [here](https://www.jetbrains.com/de-de/pycharm/download/).

» Finish installing the programme to your pc and open it when you are done.

## Configuration

» Make sure you have python set up on your device. If you don't, download it [here](https://www.python.org/downloads/).

» Create a new project, set your base interpreter, if its not set, this should be the path to the .exe file of your installed python.

» You can set a few more settings if you want like the location of your project

» When you are done click create.

## Library set up

» Go to the File in the left up corner and search for `Python Interpreter`

» Add a dependency by clicking the + and searching for `py-cord`

» Click "Install Package"

» Wait for the packge to be installed and close the two pop up windows.

## Example Bot

» Clear the main file you should see now. This will be used to register the bot.

» Now add this code to the class.

```python
import discord

intents = discord.Intents.default()
# This sets the intents to the default intents of discord.
intents.message_content = True
# This allowes the bot to view the content of messages

client = discord.Bot(intents=intents)
# Creates the bot with the intents

TOKEN = 'TOKEN'
# This sets the variable TOKEN with your token
```

» Next we will create the events.

```python
import discord

intents = discord.Intents.default()
# This sets the intents to the default intents of discord.
intents.message_content = True
# This allowes the bot to view the content of messages

client = discord.Bot(intents=intents)
# Creates the bot with the intents

TOKEN = TOKEN'
# This sets the variable TOKEN with your token


@client.event
# This calls the event listener of py-cord to listen to the on_ready event and when its executed to run the code
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    # This will be printed when the Bot has successfully connected to Discord


@client.event
# This calls the event listener of py-cord to listen to the on_message event and when its executed to run the code
async def on_message(message):
    if message.content == 'ping':
        # This is checking if the message equals  "ping"
        channel = message.channel
        # This gets the channel from discord and puts it into a variable
        await channel.send('pong!')
        # This is responding "pong" to the message


@client.slash_command(name='ping', description='Ping!')
# This calls the slash command manager of py-cord to create a new command with the name ping and description "Ping!"
# and when the command is executed to run the code
async def ping(ctx):
    await ctx.respond(f"Pong!")
    # This is responding "Pong!" to the command


client.run(TOKEN)
# This will start the Bot
```

## Final

» Upload the main.py file to the Karlo-Hosting Panel
