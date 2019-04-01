import mongoose from 'mongoose';

//Mongo connection
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection('mongodb://localhost/graphqlDB');

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
});

const Contacts = conn.model('contacts', ContactSchema);

export { Contacts };
