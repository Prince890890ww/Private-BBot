const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "siam",
    aliases: ["ddd","siam","nnn"],
    version: "1.0",
    author: "Siam-aminul",
    role: 0,
    shortDescription: {
      en: "siam",
    },
    longDescription: {
      en: "shows siam of bot.",
    },
    category: "fun",
    guide: {
      en: "Use {p}siam to see siam of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "𝗣𝗶𝗰 𝗟𝗼𝗮𝗱𝗶𝗻𝗴... ",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "fuck ping💀";
      if (ping < 400) {
        pingStatus = "fuck this ping 😤";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.ibb.co/FzftMhk/image.jpg";
      const attachment = await global.utils.getStreamFromURL(imgURL);

      api.sendMessage({
        body: `👨‍💻 See:`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};