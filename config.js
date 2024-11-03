const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_06_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxQUhqVUphM294cU00UXhzUlR0TFdlQmx2QnE0YlZha2o4L0NqQ3ZEM3EwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDQyNTYxNjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNjhGRkRBMkYyRUUxQ0JFQzlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDYxNzU4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXVjd1X3hwYVNxZVpfc044em5SZkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxZmIyYjk4LTU3NmItNDQ5Ny05YTFlLTFiMzcyMDNiMTM5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxNDQsXG4gICAgICA3NyxcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgMzMsXG4gICAgICA1NixcbiAgICAgIDI2LFxuICAgICAgMTgzLFxuICAgICAgMTU5LFxuICAgICAgMjExLFxuICAgICAgOCxcbiAgICAgIDI2LFxuICAgICAgMjE0LFxuICAgICAgMTA1LFxuICAgICAgMTQ4LFxuICAgICAgMTExLFxuICAgICAgMTQsXG4gICAgICAwLFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxNjgsXG4gICAgICAyMTAsXG4gICAgICAxNTYsXG4gICAgICAxNTUsXG4gICAgICA2NSxcbiAgICAgIDE2MCxcbiAgICAgIDg1LFxuICAgICAgNzQsXG4gICAgICAxODQsXG4gICAgICAyMzcsXG4gICAgICAxNDAsXG4gICAgICAxOTYsXG4gICAgICAxMDAsXG4gICAgICA0OSxcbiAgICAgIDU1LFxuICAgICAgMTEwLFxuICAgICAgMTcyLFxuICAgICAgMjE4LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFYyUVNLNkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDQyNTYxNjI6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgxMTcwOTcyODExMzM1OjI4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFZQ1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEVGdiVU9FT1hCbkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSFg0bjY2Qlg3bU9pZ0xyMmFuWUNWbWt6RDJ5OTJmd2xZQUxHSVNZUTUyVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjWXUxdUlBQ3pTa1JzYmdLakxmeDh3M1RNQ2lBZ25iSWo0V0sycW5FS1V5Q0E2dUZVaWtUZ2RrSCs3RFRlNGxxdSt1OTgycEp5UkhpemoxSDlaOWNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaS0tVT1hiZU9DMjZBdWEwWHJVWlRjTWQyNlBCZEw3VzdlM1JocEtFeGplMytDclpEdnRPa0s5KzZMN2g1Z3pQZGxnQkY3UUpONEFtVE9MU3pCVUJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ0MjU2MTYyOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYxNzU3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNXeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1d4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWTNNbTVvbUNZVzJ3dS9xZDJ3Z0l4U0I4U3ppTjdQTFNaRlRaQnp5cE84dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODY5MjcyNDgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2MTc1Nzk5MjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "¡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shisui-XMD",
  ownername:process.env.OWNER_NAME|| "Shisui-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
