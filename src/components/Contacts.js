import React, { Component } from "react";
import axios from "axios";
import Contact from "./Contact";


class Contacts extends Component {
  state = {
    contacts: []
  };

  // get users from api
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({ contacts: res.data });
      console.log(this.state.contacts);
    });
  }
  // match users to contact component
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            website={contact.website}
          />
        ))}

      </div>
    );
  }
}

export default Contacts;
