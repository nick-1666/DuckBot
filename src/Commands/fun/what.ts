import { MessageEmbed } from "discord.js";
import { Command } from "../../Interfaces";
const Discord = require("discord.js");
export const command: Command = {
  name: "what",
  description: "WHAT? HOW?",
  usage: "what [IMAGEURL]",
  run: async (client, message, args) => {
    const alclient = require("alexflipnote.js");
    const alexclient = new alclient(client.config.alexApi);

    if (!(args.length == 2)) {
      let link = await alexclient.image.what({ image: args[0] });
      if (!Buffer.isBuffer(link))
        return message.channel.send(
          "stop being cringe and pass me that discord image url"
        );

      try {
        message.channel.send({ files: [{ attachment: link }] });
      } catch (error) {
        console.log(error);
      }
    } else {
      message.channel.send(
        "stop being cringe and pass me that discord image url"
      );
    }
  },
};
