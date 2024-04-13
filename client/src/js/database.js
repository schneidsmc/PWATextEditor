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
const textDb = await openDB('jate', 1)

  // Create a new transaction and specify the database
const tx = textDb.transaction('jate', 'readwrite');

  // Open up the desired object store
const store = tx.objectStore('jate');

  // User the .put() method on the store and pass in the content.
const request = store.put({ id: 1, value: content });

  // Get confirmation of the request
  const result = await request;
  console.log('Data has been saved!', result)
  }

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database and version we want to use
  const textDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = textDb.transaction('jate', 'readonly');

  // Open up the desire object store
  const store = tx.objectStore('jate');

  // User the .getAll() method to get all the data in the database
  const request = store.get(1);

  // get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result?.value

}

initdb();
