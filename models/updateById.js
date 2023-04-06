const getAll = require('./listContacts')
const updateContacts = require('../helpers/updateContacts')

const updateById = async (id, body) => {
        const contacts = await getAll();
        const indx = contacts
            .findIndex(item => item.id === id); 
        if (indx === -1) {
            return null;
        }
    contacts[indx] = { id, ...body }
    await updateContacts(contacts)
    return contacts[indx];
}

module.exports = updateById;