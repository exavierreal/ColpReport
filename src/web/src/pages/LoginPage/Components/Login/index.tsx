import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import { Buttons, ContentLabel, Field, Form, GoogleButton, GoogleIcon, Input, Label, Line, OrDivision, SaveButton } from "../Shared/LoginForm/styles";
import { ForgotPassword } from "./styles";

export function Login() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    
    return (
        <Form>
            <Field className="mt-20px">
                <Input type="email" name="email" placeholder="E-mail" required autoComplete="off" />
                <Label htmlFor="email">
                    <ContentLabel>E-mail</ContentLabel>
                </Label>
            </Field>
            
            <Field className="mt-20px">
                <Input type={ isVisiblePassword ? "text" : "password" }
                    name="password" placeholder="Senha" required autoComplete="off" />
                <Label htmlFor="password">
                    <ContentLabel>Senha</ContentLabel>
                </Label>
                <Icon
                    onClick={ () => setIsVisiblePassword(!isVisiblePassword) }
                    className="visible-icon" width="20px" height="20px"
                    icon={ isVisiblePassword ? "akar-icons:eye-open" : "akar-icons:eye-slashed" } />
            </Field>

            <Buttons className="mt-30px">
                <SaveButton>Entrar</SaveButton>
                <OrDivision>
                    <Line />
                    <p>Ou</p>
                    <Line />
                </OrDivision>
                <GoogleButton>
                    <GoogleIcon src="/assets/logo-google.svg" />
                    Acessar com Google
                </GoogleButton>
            </Buttons>

            <ForgotPassword>
                Esqueci minha senha.
            </ForgotPassword>
        </Form>
    );
}