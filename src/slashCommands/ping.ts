import { SlashCommand } from "djs-bot-base";

export default new SlashCommand({
  slashCommandData: (builder) =>
    builder.setName("ping").setDescription("Show the delay speed of the bot!"),
  developerOnly: false,
  maintenance: false,
  async run(interaction) {
    const client = interaction?.client;

    interaction.reply({ content: `**${client.ws.ping}** ms`, flags: 64 });
  },
});
