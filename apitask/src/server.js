const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");
const port = 3000;

const folderpath = path.join(__dirname, "text");
if (!fs.existsSync(folderpath)) {
    fs.mkdirSync(folderpath);
} else {
    console.log('already created');
}

app.use(bodyParser.json());

// Endpoint to create a text file
app.post("/createfile", async (req, res) => {
    try {
        fs.ensureDirSync(folderpath); // Ensure the directory exists synchronously
        let time = new Date().toISOString();
        time = time.replace(/:/g, "-"); // Replace colons with dashes
        const filename = `${time}.txt`;
        const filepath = path.join(folderpath, filename);

        await fs.writeFile(filepath, time);
        res.send("File created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating a file");
    }
});

// Endpoint to get all files from the text folder
app.get("/getallfiles", async (req, res) => {
    try {
        const files = await fs.readdir(folderpath);
        res.json(files);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving files");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
