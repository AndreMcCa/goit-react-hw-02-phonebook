import PropTypes from 'prop-types';

import Contact from "./Contact/Contact";

export default function ContactsList({contacts, onDelete}) {

    return (
        <ul>
         <Contact contacts={contacts} onDelete={onDelete}/>
      </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}