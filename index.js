require("express")().get("/",(e,p)=>p.sendFile(require("path").resolve("index.html"))).listen(3e3),console.log("Website Ready!");