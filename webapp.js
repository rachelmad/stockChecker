import Express from 'express';

const PORT = 3000;
const app = Express();

app.use(Express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
