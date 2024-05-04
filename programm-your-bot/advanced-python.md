# Advanced Python

Learn more about Discord-Bots written in python.

> [!NOTE]
> Please first read the basic python tutorial!

## Library set up

» Please install `ezcord` as shown in the first tutorial.

## Creating an new command: echo

» This command let you send a message in the name of the bot.

» First create the command

```python
@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
async def echo():
```

» Now we need some parameters in the async def function.

```python
@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
):
```

» Now we add the code to send the message. Also this shows you if the message was sent.

```python
@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
    await channel.send(text)
    await ctx.respond("Message sent", ephemeral=True)
```

» We don't want that users that aren't an administrator on the Discord-Server can use this command

```python
@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
@discord.default_permissions(administrator=True)
@commands.has_permissions(administrator=True)
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
    await channel.send(text)
    await ctx.respond("Message sent", ephemeral=True)
```

» We also don't want, that the command gets abused, so we add a limit to only allow every user to use that command once every 30 seconds.

```python
@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
@discord.default_permissions(administrator=True)
@commands.has_permissions(administrator=True)
@commands.cooldown(1, 30, commands.BucketType.member)
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
    await channel.send(text)
    await ctx.respond("Message sent", ephemeral=True)
```

» That command is now finished.

## Insert into the code in the main.py file.

» We first have to import ezcord at the top.

» Also we have to import Option from discord.commands and commands from discord.ext. 

» Now we have to replace the discord.Bot with ezcord.Bot.

```python
import discord
from discord.commands import Option
from discord.ext import commands
import ezcord

intents = discord.Intents.default()
# This sets the intents to the default intents of discord.
intents.message_content = True
# This allowes the bot to view the content of messages

bot = ezcord.Bot(intents=intents)
# Creates the bot with the intents

TOKEN = 'TOKEN'
# This sets the variable TOKEN with your token


@bot.event
# This calls the event listener of py-cord to listen to the on_ready event and when its executed to run the code
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    # This will be printed when the Bot has successfully connected to Discord


@bot.event
# This calls the event listener of py-cord to listen to the on_message event and when its executed to run the code
# This is an old method. Please use slash-commands if you can.
async def on_message(message):
    if message.content == 'ping':
        # This is checking if the message equals  "ping"
        channel = message.channel
        # This gets the channel from discord and puts it into a variable
        await channel.send('pong!')
        # This is responding "pong" to the message


@bot.slash_command(name='ping', description='Ping!')
# This calls the slash command manager of py-cord to create a new command with the name ping and description "Ping!"
# and when the command is executed to run the code
async def ping(ctx):
    latency = bot.latency * 1000
    await ctx.respond(f"Latency: {latency:.2f} ms!")
    # This is responding with the latency of the bot, to the command


bot.run(TOKEN)
# This will start the Bot
```

» Next we will insert the new command.

```python
import discord
from discord.commands import Option
from discord.ext import commands
import ezcord

intents = discord.Intents.default()
# This sets the intents to the default intents of discord.
intents.message_content = True
# This allowes the bot to view the content of messages

bot = ezcord.Bot(intents=intents)
# Creates the bot with the intents

TOKEN = 'TOKEN'
# This sets the variable TOKEN with your token


@bot.event
# This calls the event listener of py-cord to listen to the on_ready event and when its executed to run the code
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    # This will be printed when the Bot has successfully connected to Discord


@bot.event
# This calls the event listener of py-cord to listen to the on_message event and when its executed to run the code
# This is an old method. Please use slash-commands if you can.
async def on_message(message):
    if message.content == 'ping':
        # This is checking if the message equals  "ping"
        channel = message.channel
        # This gets the channel from discord and puts it into a variable
        await channel.send('pong!')
        # This is responding "pong" to the message


@bot.slash_command(name='ping', description='Ping!')
# This calls the slash command manager of py-cord to create a new command with the name ping and description "Ping!"
# and when the command is executed to run the code
async def ping(ctx):
    latency = bot.latency * 1000
    await ctx.respond(f"Latency: {latency:.2f} ms!")
    # This is responding with the latency of the bot, to the command


@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
@discord.default_permissions(administrator=True)
@commands.has_permissions(administrator=True)
@commands.cooldown(1, 30, commands.BucketType.member)
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
    await channel.send(text)
    await ctx.respond("Message sent", ephemeral=True)


bot.run(TOKEN)
# This will start the Bot
```
## Activity and Status

» We will create an activity like `playing discord` and a status (`online`, `idle`, `do not disturbe`)

» First we will set a status.

```python
status = discord.Status.online
# can be online, dnd, idle or offline
```

» Next we will set the activity.

```python
activity = discord.Activity(type=discord.ActivityType.playing, name="Discord")
# the type can be playing, watching, listening, competing or streaming
# the name can be anything you want.
```

» Now we will insert this into our code.

```python
import discord
from discord.commands import Option
from discord.ext import commands
import ezcord

intents = discord.Intents.default()
# This sets the intents to the default intents of discord.
intents.message_content = True
# This allowes the bot to view the content of messages

status = discord.Status.online
# can be online, dnd, idle or offline
activity = discord.Activity(type=discord.ActivityType.playing, name="Discord")
# the type can be playing, watching, listening, competing or streaming
# the name can be anything you want.

bot = ezcord.Bot(intents=intents, status=status, activity=activity)
# Creates the bot with the intents

TOKEN = 'TOKEN'
# This sets the variable TOKEN with your token


@bot.event
# This calls the event listener of py-cord to listen to the on_ready event and when its executed to run the code
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    # This will be printed when the Bot has successfully connected to Discord


@bot.event
# This calls the event listener of py-cord to listen to the on_message event and when its executed to run the code
# This is an old method. Please use slash-commands if you can.
async def on_message(message):
    if message.content == 'ping':
        # This is checking if the message equals  "ping"
        channel = message.channel
        # This gets the channel from discord and puts it into a variable
        await channel.send('pong!')
        # This is responding "pong" to the message


@bot.slash_command(name='ping', description='Ping!')
# This calls the slash command manager of py-cord to create a new command with the name ping and description "Ping!"
# and when the command is executed to run the code
async def ping(ctx):
    latency = bot.latency * 1000
    await ctx.respond(f"Latency: {latency:.2f} ms!")
    # This is responding with the latency of the bot, to the command


@bot.slash_command(name='echo', description='Send a message in the name of the bot.')
@discord.default_permissions(administrator=True)
@commands.has_permissions(administrator=True)
@commands.cooldown(1, 30, commands.BucketType.member)
async def echo(
        ctx,
        text: Option(str, "The text you want to send"),
        channel: Option(discord.TextChannel, "The channel, the message should be send to.")):
    await channel.send(text)
    await ctx.respond("Message sent", ephemeral=True)


bot.run(TOKEN)
# This will start the Bot
```
