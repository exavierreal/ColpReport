import { Icon } from "@iconify-icon/react";
import { ChangeEvent, FormEvent, useState } from "react";
import * as yup from 'yup';
import { useRegisterApi } from "../../Api/useAuthApi";
import { User } from "../../interfaces/User";
import { Buttons, ContentLabel, ErrorNotifications, Field, Form, GoogleButton, GoogleIcon, Input, Label, Line, NameContainer, OrDivision, SaveButton } from "../Shared/LoginForm/styles";
import { TermsOfUse } from "./styles";


export function Register() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState<User>({ name: '', lastname: '', email: '', password: '', confirmPassword: '' })

    const { register, isLoading } = useRegisterApi();

    function handleUserInput(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setUser({...user, [name]: value});
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (await validateUser()) {
            register(user);
        }
    }

    async function validateUser() {
        let schema = yup.object().shape({
            confirmPassword: yup.string().required('Confirmação de senha é obrigatório').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
            password: yup.string().min(5, 'A senha deve possuir ao menos 6 caracteres').required('Preencha o campo senha'),
            email: yup.string().email('Informe um e-mail válido').required('Preencha o campo e-mail'),
            lastname: yup.string().required('Preencha o campo sobrenome'),
            name: yup.string().required('Preencha o campo nome').min(3, 'Nome deve ter ao menos 3 caracteres')
        })

        try {
            await schema.validate(user);
            setErrorMessage("");
            return true;
        }
        catch (err: any) {
            setErrorMessage(err.errors);
            return false;
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <NameContainer>
                <Field>
                    <Input onChange={(e) => handleUserInput(e)} name="name" placeholder="Nome" autoComplete="off" />
                    <Label htmlFor="name">
                        <ContentLabel>Nome</ContentLabel>
                    </Label>
                </Field>

                <Field>
                    <Input onChange={(e) => handleUserInput(e)} name="lastname" placeholder="Sobrenome" autoComplete="off" />
                    <Label htmlFor="lastname">
                        <ContentLabel>Sobrenome</ContentLabel>
                    </Label>
                </Field>
            </NameContainer>

            <Field>
                <Input onChange={(e) => handleUserInput(e)} name="email" placeholder="E-mail" autoComplete="off" />
                <Label htmlFor="email">
                    <ContentLabel>E-mail</ContentLabel>
                </Label>
            </Field>
            
            <Field>
                <Input onChange={(e) => handleUserInput(e)} type={ isVisiblePassword ? "text" : "password" }
                    name="password" placeholder="Senha" autoComplete="off" />
                <Label htmlFor="password">
                    <ContentLabel>Senha</ContentLabel>
                </Label>
                <Icon
                    onClick={ () => setIsVisiblePassword(!isVisiblePassword) }
                    className="visible-icon" width="20px" height="20px"
                    icon={ isVisiblePassword ? "akar-icons:eye-open" : "akar-icons:eye-slashed" } />
            </Field>

            <Field>
                <Input onChange={(e) => handleUserInput(e)} 
                    type={ isVisibleConfirmPassword ? "text" : "password" }
                    name="confirmPassword" placeholder="Confirme a sua senha" autoComplete="off" />
                <Label htmlFor="confirmPassword">
                    <ContentLabel>Confirme a sua senha</ContentLabel>
                </Label>
                <Icon
                    onClick={ () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword) }
                    icon={ isVisibleConfirmPassword ? "akar-icons:eye-open" : "akar-icons:eye-slashed" }
                    className="visible-icon" width="20px" height="20px" />
            </Field>

            <ErrorNotifications className={errorMessage === "" ? "" : "error-notifications"}>
                <li>{errorMessage !== "" && errorMessage}</li>
            </ErrorNotifications>

            <Buttons>
                <SaveButton type="submit">Vamos Lá</SaveButton>
                <OrDivision>
                    <Line />
                    <p>Ou</p>
                    <Line />
                </OrDivision>
                <GoogleButton type="submit">
                    <GoogleIcon src="/assets/logo-google.svg" />
                    Acessar com Google
                </GoogleButton>
            </Buttons>

            <TermsOfUse>
                Ao clicar no botão acima, você concorda com nossos <a href="">termos de uso</a> e <a href="">política de privacidade</a>
            </TermsOfUse>
        </Form>
    );
}