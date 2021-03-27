import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    age: 0,
    salary: 0,
    hobby: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    setState({ ...state, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    axios
      .post(
        "https://sheet.best/api/sheets/1fa2aebb-153c-44ed-86c8-bc2acd7e2be5",
        state
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const { name, age, salary, hobby } = state;

  return (
    <Container fluid className="container">
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Enter your age"
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Enter your salary"
            type="number"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder="Enter your hobby"
            type="text"
            name="hobby"
            value={hobby}
            onChange={handleChange}
          />
        </Form.Field>
        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
