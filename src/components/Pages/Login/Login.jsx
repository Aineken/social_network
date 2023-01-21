import React, { useEffect, useState } from "react";
import User from "@mui/icons-material/Person";
import Email from "@mui/icons-material/Mail";
import Password from "@mui/icons-material/LockOpen";
import { Container, FormContainer, Heading1, Heading2 } from "./LoginStyled";

import {
  Button,
  Field,
  Form,
  Icon,
  Input,
  Label,
  List,
} from "../../../styles/GlobalComponents/form";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState();
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    //send form data to netlify function
    fetch("/.netlify/functions/registration", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log("response", response);
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => alert(error))
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container>
      <Heading1>{success ? `Welcome, ${name}` : "Enter"}</Heading1>

      <FormContainer hidden={success} animateIn={animate}>
        <Heading2>Login</Heading2>
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Icon>
              <User sx={{ fontSize: "26px" }} />
            </Icon>
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
            <Icon>
              <Email sx={{ fontSize: "26px" }} />
            </Icon>
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
            <Icon>
              <Password sx={{ fontSize: "26px" }} />
            </Icon>
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
            <Icon>
              <Password sx={{ fontSize: "26px" }} />
            </Icon>
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
}

export default Login;
