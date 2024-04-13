import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (content) => {
  console.log('Update the Database');

  // Create a connection to the database and version we want to use

  // Create a new transaction and specify the database

  // Open up the desired object store

  // User teh .put() method on the store and pass in the content.

  // Get confirmation of the request
  
  // error
  console.error('putDb not implemented');}

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database and version we want to use

  // Create a new transaction and specify the database and data privileges

  // Open up the desire object store

  // User the .getAll() method to get all the data in the database

  // get confirmation of the request
  
  console.error('getDb not implemented');}

initdb();
