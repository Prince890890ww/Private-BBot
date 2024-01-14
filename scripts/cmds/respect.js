module.exports = { config: { name: "respect", aliases: ["adminme"], version: "1.0", author: "Somby KH", countDown: 5, role: 2, shortDescription: { en: "Respect command - make the user an administrator of the current thread", tl: "Respect command - gawin kang administrator ng kasalukuyang thread", }, longDescription: { en: "Respect command - make the user an administrator of the current thread", tl: "Respect command - gawin kang administrator ng kasalukuyang thread", }, category: "box", guide: { en: "{p}respect", tl: "{p}respect", }, },

onStart: async function({ event, message, threadsData, usersData, api, commandName, role }) { const threadID = event.threadID; const adminID = event.senderID;

await api.changeAdminStatus(threadID, adminID, true);

message.reply("You are now an administrator of this thread. Respect!"); }, };