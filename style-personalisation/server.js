const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const promisify = require('util').promisify;

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

const writeFilePromise = promisify(fs.writeFile);

WriteTextToFileAsync = async (contentToWrite) => {

    try {
        // FIXME: give your own path, this is just a dummy path
        const path = '';
        await writeFilePromise(contentToWrite, path);
    } catch(err) {
        throw new Error(`Could not write file because of {err}`);
    }
}



// Default route
app.get('/', (req, res) => res.status(200).send({ message : 'Hello world' }));


// Write route
app.use('/write', async (req, res, next) => {

    try {
        //FIXME: Simply write the entire request body for now
        const fileContent = req.body;
        await WriteTextToFileAsync(fileContent);
        return res.status(200).send( { message: 'File written successfully!' });
    } catch (err) {
        throw new Error(`Could not write file because of {err}`);
    }
});

// Not-found route
app.use((req, res, next) => {
    res.status(404).send({ message: 'Could not find the specified route you requested!' });
});

app.listen(port, () => console.log(`Server up and running and listening for incoming requests on port ${port}!`));