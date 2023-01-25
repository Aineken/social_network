import React, { useState } from "react";

import {
  Container,
  FormContainer,
  Heading1,
  Button,
  Field,
  Form,
  Input,
  Label,
} from "../../../styles/GlobalComponents/form";

const Reply = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(true);
  };

  return (
    <Container>
      <Heading1>
        {success
          ? `Thank you for your application ${name}`
          : "Send an Application"}
      </Heading1>
      <FormContainer hidden={success}>
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="password">Surname</Label>
            <Input
              name="surname"
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              autocomplete
              required
            />
          </Field>
          <Field>
            <Label htmlFor="password">Name</Label>
            <Input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autocomplete
              required
            />
          </Field>
          <Field>
            <Label htmlFor="password">Father Name</Label>
            <Input
              name="fatherName"
              type="text"
              id="fatherName"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              autocomplete
            />
          </Field>
          <Field>
            <Label htmlFor="password">Phone</Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autocomplete
              required
            />
          </Field>
          <Field>
            <Label htmlFor="email" label="email">
              Email
            </Label>
            <Input
              name="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autocomplete
            />
          </Field>
          <br />
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Reply;
