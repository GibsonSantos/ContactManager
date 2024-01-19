import React from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from 'react-router-dom';

const ContactList = (props) => {
    const navigate = useNavigate();

    const deleteContactHandler = (id) => {
        props.removeContactHandler(id);
    };

    // Initialize contacts with an empty array if not provided
    const renderContactList = (props.contacts || []).map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });

    const handleAddContactClick = () => {
        navigate('/add');
    }

    return (
        <div className="ui celled list">
            {renderContactList}
            <button className="positive ui button" onClick={handleAddContactClick}>Add contact</button>
        </div>
    );
}

export default ContactList;
