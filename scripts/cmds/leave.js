const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
  config: {
    name: "leave",
    aliases: ["l"],
    version: "1.0",
    author: "Kshitiz",
    countDown: 5,
    role: 2,
    shortDescription: "Bot will leave a group chat",
    longDescription: "",
    category: "admin",
    guide: {
      vi: "{pn} <gcUid>",
      en: "{pn} <gcUid>"
    }
  },

  onStart: async function ({ api, event, args, message }) {
   
    if (args.length !== 1) {
      api.sendMessage("Invalid command usage. Please provide the group chat UID.", event.threadID);
      return;
    }

    const gcUid = args[0];

    try {
      
      const botUserId = api.getCurrentUserID();

      
      await api.removeUserFromGroup(botUserId, gcUid);

      
      api.sendMessage(`Left the group chat : ${gcUid}`, event.threadID);
    } catch (error) {
      
      api.sendMessage(`Error leaving the group chat. Please check the UID and try again.`, event.threadID);
      console.error(error);
    }
  }
};
