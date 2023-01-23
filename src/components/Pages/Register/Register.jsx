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
  List,
} from "../../../styles/GlobalComponents/form";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(true);
  };

  return (
    <Container>
      <Heading1>{success ? `Welcome, ${name}` : "Create an Account"}</Heading1>

      <FormContainer hidden={success}>
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="name" label="name">
              Name
            </Label>
            <Input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autocomplete
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
              onInput={(e) => e.target.setCustomValidity("")}
              onInvalid={(e) => {
                e.target.setCustomValidity("");
                if (!e.target.validity.valid) {
                  e.target.setCustomValidity("Must be a valid email address");
                }
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
              autocomplete
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>

            <Input
              name="password"
              type="password"
              id="password"
              minlength="8"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              onInput={(e) => e.target.setCustomValidity("")}
              onInvalid={(e) => {
                e.target.setCustomValidity("");
                if (!e.target.validity.valid) {
                  e.target.setCustomValidity(
                    "Must contain at least one upper case letter, at least one lower case letter, at least one number, at least one special character, minimum eight in length"
                  );
                }
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>

          <Field>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              minlength="8"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyUp={(e) => {
                if (
                  password &&
                  confirmPassword &&
                  password !== confirmPassword
                ) {
                  e.target.setCustomValidity("Passwords must match");
                } else {
                  e.target.setCustomValidity("");
                }
              }}
            />
          </Field>
          <br />
          <p>Password Must Contain:</p>
          <List>
            <li>At least 1 uppercase and lowercase letter</li>
            <li>At least 1 number</li>
            <li>At least 1 special characer</li>
            <li>At least 8 characers</li>
          </List>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Register;
