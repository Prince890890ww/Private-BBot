module.exports = {
    config: {
        name: "kahini1",
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
    if (event.body && event.body.toLowerCase() == "kahini1") return message.reply("যেদিন তোর মাকে প্রথম দেখেছে সেদিনি তোর মাকে সিয়াম চুদেছে😌 এতে অবাক হোয়ার কিছু নেই কারন দুটি মনের মিল☺️ অতএব তুই আমাদের xaros সন্তান");
}
};