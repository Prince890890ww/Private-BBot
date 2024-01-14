Simple Script HAHA sa goatbot

const triggers = ["Hi", "Hello"];

module.exports = {
  config: {
    name: "Hi", 
    version: "69",
    author: "Ace", // Author Can Change, if you want
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "", 
    category: "Not Cmd"
  },

  onStart: async function() => {},

  onChat: async function({ api, event }) => {
    const { body } = event;
    if (body.includes(triggers)) {
      api.sendMessage(`HI Miss/Mr. ${username}`, event.threadID, event.messageID);
    }
  },
};