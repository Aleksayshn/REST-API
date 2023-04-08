const { nanoid } = require("nanoid");

const updateContacts = require('../../helpers/updateContacts')
const getAll = require('./listContacts')

const add = async (name, email, phone) => {
        const contacts = await getAll();
        const newContact = {id: nanoid(), name, email, phone };
        // await fs.appendFile(filePath, JSON.stringify(newContact))
        contacts.push(newContact)
        await updateContacts(contacts)
        return newContact;
}

module.exports = add;