import { useState } from "react";
import { Login } from "../Login";
import { Register } from "../Register";
import { Box, Container, Rectangle, Tab, TabPanel, Tabs } from "./styles";

export function FormBox() {
    const [activeTab, setActiveTab] = useState("Register");

    const handleTabLogin = () => setActiveTab("Login");
    const handleTabRegister = () => setActiveTab("Register");

    return (
        <>
            <Container>
                <Tabs>
                    <Tab className={activeTab === "Login" ? "active" : ""} onClick={handleTabLogin}>Entrar</Tab>
                    <Tab className={activeTab === "Register" ? "active" : ""} onClick={handleTabRegister}>Registrar</Tab>
                </Tabs>

                <TabPanel>
                    {activeTab === "Login" ? <Login /> : <Register />}
                </TabPanel>
            </Container>

            <Rectangle className={ activeTab === "Login" ? "custom-box" : ""}>
                <Box />
            </Rectangle>
        </>
    );
}