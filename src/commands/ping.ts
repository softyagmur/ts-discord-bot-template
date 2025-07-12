import { Command } from "djs-bot-base";

export default new Command({
  name: "ping",
  aliases: ["ping", "ms", "bot"],
  guildOnly: false,
  dmOnly: false,
  developerOnly: false,
  maintenance: false,
  async run(message) {
    const client = message?.client;

    message.reply({ content: `**${client.ws.ping}** ms` });
  },
});
