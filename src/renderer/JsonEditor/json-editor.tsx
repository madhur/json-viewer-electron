import { JsonEditor as Editor } from 'jsoneditor-react';
import React from 'react';

class JsonEditor extends React.Component {
  constructor(props) {
    super(props);
    this.yourJson = `{
            "firstName": "John",
            "lastName": "Smith",
            "gender": "man",
            "age": 32,
            "address": {
                "streetAddress": "21 2nd Street",
                "city": "New York",
                "state": "NY",
                "postalCode": "10021"
            },
            "phoneNumbers": [
                { "type": "home", "number": "212 555-1234" },
                { "type": "fax", "number": "646 555-4567" }
            ]
        }`;
  }

  handleChange() {}

  render() {
    return <Editor value={this.yourJson} onChange={this.handleChange} />;
  }
}

export default JsonEditor;
