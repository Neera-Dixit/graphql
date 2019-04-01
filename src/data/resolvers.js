import { Contacts } from './dbConnectors';
import { resolve } from 'dns';

export const resolvers = {
  Query: {
    getContacts: () => {
      return Contacts.find();
    },

    getContactByID: (root, { id }) => {
      console.log('id',id)
      return new Promise((resolve, reject) => {
        Contacts.findById(id, (err, contact)=>{
          if (err) {
            reject(err)
          }

          resolve(contact);
        });
      })
    },
  },
  Mutation: {
    createContact: (root, { input }) => {
      console.log('root',root)
      const { firstName, lastName, email, company } = input;

      const newContact = new Contacts({
        firstName,
        lastName,
        email,
        company,
      });

      newContact.id = newContact._id;

      return new Promise((resolve, reject) => {
        newContact.save((err)=>{
          if (err) {
            reject(err)
          }

          resolve(newContact);
        });
      })
    },

    updateContact: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Contacts.findOneAndUpdate({ _id: input.id }, input, (err, newContact) => {
          if (err) {
            reject(err)
          }

          resolve(newContact);
        });
      })
    },

    deleteContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contacts.remove({ _id: id }, (err, status) => {
          if (err) {
            reject(err)
          }

          resolve('successfully Deleted!');
        })
      });
    }
  }
};

/*

mutation {
  createContact(input: {
    firstName: "neeraj",
    lastName: "dixit",
    email: "neerajdixit27@gmail.com",
    company: "Nutanix"
  }) {
    id,
    firstName
  }
}

Query {
  getContacts
}

<---- alias ---->
query {
  one: getContactByID(id: "5ca1fc2b7813810984203b40") {
    id,
    email
  }
  
  two: getContactByID(id: "5ca20134940f920f2df8e223") {
    id,
    email
  }

<----- fragment ------->

query {
  one: getContactByID(id: "5ca1fc2b7813810984203b40") {
    id,
    ...contactFragment
  }
  
  two: getContactByID(id: "5ca20134940f920f2df8e223") {
    ...contactFragment
  }
}

fragment contactFragment on Contact {
    firstName,
    lastName,
    email
}
}

<----- update query ------->

mutation {
  updateContact(input: {id: "5ca1fc2b7813810984203b40", firstName: "neeraj-tesco"}) {
    firstName,
    lastName
  }
}
*/