const getAll = require('./listContacts')
const updateContacts = require('../helpers/updateContacts')

const changeById = async (id, phone) => {
    const contacts = await getAll();
    const [contact] = contacts.filter(el => el.id === id);
    contact.phone = phone;
    await updateContacts(contacts)
    return contact;
}

module.exports = changeById;