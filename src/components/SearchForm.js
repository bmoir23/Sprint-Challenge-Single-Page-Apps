
import React, { useState } from "react";
import { Form, FormGroup, Label, Input} from "reactstrap";

export default function SearchForm ({ onSearch }) {
  const [search, setSearch] = useState({ name: "" });


const handleInputChange = event => {
  setSearch({ ...search, name: event.target.value.substr(0, 20)});
};
return (
  <Form onSubmit={event => onSearch(event, search )}>
    <FormGroup className="SearchBar">
      <Label for="exampleSearch">Search</Label>
      <Input
          className="search-bar"
          type="search"
          name="name"
          id="exampleSearch"
          placeholder="Search by Name"
          onChange={handleInputChange}
          value={search.name}
          />
    </FormGroup>
  </Form>
)
}









