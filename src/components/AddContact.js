import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>

                    <button className="ui button blue" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;