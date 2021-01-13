import PropTypes from 'prop-types';

export default function Contact({ contacts, onDelete }) {

    return contacts.map(contact => {
        return (
            <li key={contact.id}>
                <p>{contact.name} {contact.number}</p> 
                <button id={contact.id} onClick={onDelete}>Delete</button>
            </li>          
        )
    })
}

Contact.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}