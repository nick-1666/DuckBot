import { Command } from "../../Interfaces";

export const command: Command = {
  name: "ping",
  aliases: ["p", "ms"],
  description: "what do you think it does? dickhead",
  run: async (client, message, args) => {
    message.channel.send(getPing(client.ws.ping));
  },
};
function getPing(rawping: number) {
  const ping = "**" + rawping + "ms**";

  const HighMsgArr = [
    `How is your ping slower than Nick? How is it ${ping}`,
    `Did you fry your router? because with ${ping} you need a new one`,
    `is ur mom watching some naughty shit? because your lag is huge with an astounding ${ping}`,
    `you got 6 six consoles runnin homie? your ping is higher than snoop dog with ${ping}`,
    `${ping}. Bottom Text`,
  ];
  const LowMsgArr = [
    `${ping} isnt that bad.`,
    `${ping}. sweet.`,
    `${ping} is less ms than it takes for me to go to ur moms house.`,
    `your like sonic with that sweet ${ping}`,
    `SHEEEEEEEEEEEEEEEEEESH! ${ping}`,
    `daym okay! ${ping}`,
  ];

  var msgArr: string[];

  if (rawping < 101) {
    msgArr = LowMsgArr;
  } else {
    msgArr = HighMsgArr;
  }

  const pingMsg = msgArr[Math.floor(Math.random() * msgArr.length)];
  return pingMsg;
}
