module.exports = {
    config: {
        name: "breakup",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "breakup") return message.reply("~~প্রেম আবিষ্কার করছে ভালো কথা 🥰
ব্রেকআপ আবিষ্কার করতে কইছে কেডা..!! 😒😒~~ বেশি পাকনামি করছ😕");
}
};