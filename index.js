let app=require("express")();app.get("/",(e,p)=>p.sendFile(require("path").resolve("index.html"))),app.listen(3e3),console.log("Website Ready!");