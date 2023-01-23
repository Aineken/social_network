import React, { useState } from "react";
import { Container, FormContainer, Heading1 } from "./LoginStyled";

import {
  Button,
  Field,
  Form,
  Input,
  Label,
} from "../../../styles/GlobalComponents/form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(true);
  };

  return (
    <Container>
      <Heading1>{success ? `Welcome, ${email}` : "Login"}</Heading1>

      <FormContainer hidden={success}>
        <Form method="POST" onSubmit={handleSubmit}>
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
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete
              required
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
}

export default Login;
