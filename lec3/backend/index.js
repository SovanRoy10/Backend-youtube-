import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready");
// });

// get a list of 5 jokes
const jokes = [
    {
        id: 1,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 2,
        title: 'Another joke',
        content: 'This is another joke'
    },
    {
        id: 3,
        title: 'Another joke',
        content: 'This is another joke'
    },
    {
        id: 4,
        title: 'Another joke',
        content: 'This is another joke'
    },
    {
        id: 5,
        title: 'A joke',
        content: 'This is another joke'
    },
]

//standardization approach 
app.get('/api/jokes', (req, res) => {

    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})