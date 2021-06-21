import { Event } from "../Interfaces";
import Client from "../Client/index";
import { Message } from "discord.js";

export const event: Event = {
  name: "ready",
  run: (client) => {
    console.log(`${client.user.tag} is online.`);
    client.user.setActivity("Hey ya!", { type: "LISTENING" });
  },
};
