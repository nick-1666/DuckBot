const https = require("https");

const subs = [
  "thanksihateit",
  "dankmemes",
  "terriblefacebookmemes",
  "memes",
  "prequelmemes",
  "adviceanimals",
  "memeeconomy",
  "comedycemetery",
  "comedyheavan",
  "pewdiepiesubmissions",
  "funny",
];

import { Command } from "../../Interfaces";
const Discord = require("discord.js");
export const command: Command = {
  name: "meme",
  aliases: ["m"],
  description: "sends you a reddit haha funny",
  run: async (client, message, args) => {
    const randomItem = subs[Math.floor(Math.random() * subs.length)];
    const url = `https://www.reddit.com/r/${randomItem}/hot.json?limit=100`;

    https.get(url, (result) => {
      var body = "";
      result.on("data", (chunk) => {
        body += chunk;
      });

      result
        .on("end", () => {
          var response = JSON.parse(body);
          var index =
            response.data.children[Math.floor(Math.random() * 99) + 1].data;

          if (index.post_hint !== "image") {
            var text = index.selftext;
            const textembed = new Discord.MessageEmbed()
              .setTitle(subRedditName)
              .setColor(`#d9a066`)
              .setFooter("Karma: " + index.score)
              .setDescription(`[${title}](${link})\n\n${text}`)
              .setURL(`https://reddit.com/${subRedditName}`);

            message.channel.send(textembed);
          }

          var image = index.preview.images[0].source.url.replace("&amp;", "&");
          var title = index.title;
          var link = "https://reddit.com" + index.permalink;
          var subRedditName = index.subreddit_name_prefixed;

          if (index.post_hint !== "image") {
            const textembed = new Discord.MessageEmbed()
              .setTitle(subRedditName)
              .setColor(`#d9a066`)
              .setFooter("Karma: " + index.score)
              .setDescription(`[${title}](${link})\n\n${text}`)
              .setURL(`https://reddit.com/${subRedditName}`);

            message.channel.send(textembed);
          }
          const imageembed = new Discord.MessageEmbed()
            .setTitle(subRedditName)
            .setImage(image)
            .setColor(`#d9a066`)
            .setFooter("Karma: " + index.score)
            .setDescription(`[${title}](${link})`)
            .setURL(`https://reddit.com/${subRedditName}`);
          message.channel.send(imageembed);
        })
        .on("error", function (e) {
          console.log("Got an error: ", e);
        });
    });
  },
};
