import mongoose from 'mongoose';
const url: string = process.env.URL_DB || '';

mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then((db: any) => {
        console.log(`Database ${process.env.ENV_RUN} is connected`);
    })
    .catch((err: any) => {
        console.log('Error connect DB', err);
    })