const fs = require("fs");

fs.readdirSync("./src/seeds/")
	.map(fileName => {
		const collectionName = fileName.split(".")[0];
			
		console.log(1,collectionName)
	})
