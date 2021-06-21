import { MessageEmbed } from "discord.js";
import { Command } from "../../Interfaces";

export const command: Command = {
  name: "help",
  aliases: ["h"],
  description: "help for the brainlimp",
  run: async (client, message, args) => {
    if (!args.length) {
      message.react("📩");
      const embed = new MessageEmbed()
        .setTitle("Here's a list of all my commands:")
        .setColor(client.config.embedColor)
        .setDescription(client.commands.map((cmd) => cmd.name).join("\n"))
        .setFooter(
          `You can send \`${client.config.prefix}help [command name]\` to get info on a specific command!`
        );
      return message.author.send(embed);
    } else {
      client.commands.forEach((cmd) => {
        if (cmd.name === args[0]) {
          var usage: String;
          if (cmd.usage === undefined) {
            usage = cmd.name;
          } else {
            usage = cmd.usage;
          }

          var aliases: String;
          if (cmd.aliases === undefined) {
            aliases = cmd.name;
          } else {
            aliases = cmd.aliases.join(", ");
          }
          const embed = new MessageEmbed()
            .setTitle(cmd.name)
            .setColor(client.config.embedColor)
            .addFields(
              {
                name: "Description",
                value: cmd.description,
                inline: true,
              },
              {
                name: "usage",
                value: "`" + client.config.prefix + usage + "`",
                inline: true,
              }
            )
            .setFooter("aliases: " + aliases);

          message.channel.send(embed);
        }
      });
    }
  },
};
