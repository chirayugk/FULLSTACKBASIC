import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('server is ready');
});
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`server at http://localhost:${port} `);
});
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            'title': "a joke",
            'content': 'this is a joke'
        },

        {
            "id": 2,
            'title': "another joke",
            'content': 'seriously ,this is a joke'
        },
        {
            "id": 3,
            'title': "last joke",
            'content': 'please laugh ,this is a joke'
        },

    ]
    res.send(jokes)

});