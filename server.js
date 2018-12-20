const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/shopping/reviews').get((req, res) => {
    res.send({
        reviews: [{ review: 'bag'}, { review: 'computer'}]
    });
});