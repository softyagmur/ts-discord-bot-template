import { Client, GatewayIntentBits, Partials } from "discord.js";
import { CommandHandler, EventHandler } from "djs-bot-base";
import { prefix, developerIds } from "../config.json";
import "dotenv/config";

const commands = new CommandHandler({
  commandsDir: "./src/commands",
  slashCommandsDir: "./src/slashCommands",
  suppressWarnings: true,
  prefix,
  developerIds,
  messages: {
    cooldown: "You can use the command after {cooldown} seconds.",
    maintenance: "Command in maintenance!",
  },
});

const events = new EventHandler({
  eventsDir: "./src/events",
  suppressWarnings: false,
});

const client = new Client({
  intents: Object.values(GatewayIntentBits).filter(
    (i): i is number => typeof i === "number"
  ),
  partials: Object.values(Partials).filter(
    (p): p is number => typeof p === "number"
  ),
});

(async () => {
  await commands.setCommands();
  await commands.setSlashCommands();
  await events.setEvents(client);
  commands.setDefaultHandler(client).setDefaultSlashHandler(client);
  await client.login(process.env.token);
  await commands.registerSlashCommands(client);
})();
