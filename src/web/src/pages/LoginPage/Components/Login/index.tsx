import { Icon } from "@iconify-icon/react";
import { ChangeEvent, FormEvent, useState } from "react";
import * as yup from "yup";
import { AlmostThereModal } from "../../../AlmostThereModal";
import { useLoginApi } from "../../Api/useAuthApi";
import { UserLogin } from "../../interfaces/UserLogin";
import { useLoading } from "../Shared/Loading";
import { Buttons, ContentLabel, ErrorNotifications, Field, Form, GoogleButton, GoogleIcon, Input, Label, Line, OrDivision, SaveButton } from "../Shared/LoginForm/styles";
import { ForgotPassword } from "./styles";

export function Login() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>({email: '', password: ''});

    const { login, isLoading, showModal, handleModalClose, error } = useLoginApi();
    const { handleLoading } = useLoading();

    function handleUserInput(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setUserLogin({...userLogin, [name]: value});
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (await validateUser()) {
            login(userLogin)
        }
    }

    async function validateUser() {
        let schema = yup.object().shape({
            email: yup.string().email('E-mail inválido').required('Ops! Você esqueceu seu e-mail'),
            password: yup.string().required('Ops! Você esqueceu a sua senha.')
        })

        try {
            await schema.validate(userLogin)
            setErrorMessage("")
            return true;
        }
        catch(err: any) {
            setErrorMessage(err.errors);
            return false;
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Field className="mt-20px">
                    <Input onChange={(e) => handleUserInput(e)} type="email" name="email" placeholder="E-mail" required autoComplete="off" />
                    <Label htmlFor="email">
                        <ContentLabel>E-mail</ContentLabel>
                    </Label>
                </Field>
                
                <Field className="mt-20px">
                    <Input onChange={(e) => handleUserInput(e)} type={ isVisiblePassword ? "text" : "password" }
                        name="password" placeholder="Senha" required autoComplete="off" />
                    <Label htmlFor="password">
                        <ContentLabel>Senha</ContentLabel>
                    </Label>
                    <Icon
                        onClick={ () => setIsVisiblePassword(!isVisiblePassword) }
                        className="visible-icon" width="20px" height="20px"
                        icon={ isVisiblePassword ? "akar-icons:eye-open" : "akar-icons:eye-slashed" } />
                </Field>

                <ErrorNotifications className={errorMessage === "" ? "" : "error-notifications"}>
                    <li>{errorMessage !== "" && errorMessage}</li>
                </ErrorNotifications>

                <ErrorNotifications className={error === "" ? "" : "error-notifications"}>
                    <li>{error !== "" && error}</li>
                </ErrorNotifications>

                <Buttons className="mt-30px">
                    <SaveButton type="submit" onClick={handleLoading}>Entrar</SaveButton>
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

                <ForgotPassword>
                    Esqueci minha senha.
                </ForgotPassword>
            </Form>

            {showModal && <AlmostThereModal onClose={handleModalClose} />}
        </>
    );
}