import React, { useState } from "react";

import {
  Container,
  FormContainer,
  Heading1,
  Button,
  Field,
  FormStyled,
  Input,
  Label,
} from "../FormStyled.js";

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
        <FormStyled method="POST" onSubmit={handleSubmit}>
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
        </FormStyled>
      </FormContainer>
    </Container>
  );
}

export default Login;
