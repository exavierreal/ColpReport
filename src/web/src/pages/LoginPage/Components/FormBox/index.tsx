import { useState } from "react";
import { Login } from "../Login";
import { Register } from "../Register";
import { Container, Tab, TabPanel, Tabs } from "./styles";

export function FormBox() {
    const [activeTab, setActiveTab] = useState("Register");

    const handleTabLogin = () => setActiveTab("Login");
    const handleTabRegister = () => setActiveTab("Register");

    return (
        <>
            <Container className={activeTab === "Login" ? "login-width" : "register-width"}>
                <Tabs>
                    <Tab className={activeTab === "Login" ? "active" : ""} onClick={handleTabLogin}>Entrar</Tab>
                    <Tab className={activeTab === "Register" ? "active" : ""} onClick={handleTabRegister}>Registrar</Tab>
                </Tabs>

                <TabPanel>
                    {activeTab === "Login" ? <Login /> : <Register />}
                </TabPanel>
            </Container>
        </>
    );
}