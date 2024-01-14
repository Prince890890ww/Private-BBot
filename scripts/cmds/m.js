module.exports = {
	config: {
		name: "m",
    aliases: ["Siam"],
		version: "1.0",
		author: "Siam",
		role: 0,
		category: "Fun",
    shortDescription: "Flirt murgi",
		longDescription: "",
		guide: {
			vi: "not Available",
			en: "{p} chik"
		} 
	},

  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি যাকে চুদতে  চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("๛➣𓆩𝗦𝗜𝗔𝗠‣𒁍 এর চুদা লো");
setTimeout(() => {a({body: "খাংকির পোলা তর মারে চুদি 🥰" + " " + name, mentions: arraytag})}, 2000);
  }
};