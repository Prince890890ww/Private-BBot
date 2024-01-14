module.exports = {
    config: {
        name: "dihan",
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
    if (event.body && event.body.toLowerCase() == "dihan") return message.reply("দিহান মাদারচোদ একটা মেয়ে খোর ওর জন্য লিজেন্ড গ্রুপে কোনো মেয়ে থাকেনা 😾");
}
};