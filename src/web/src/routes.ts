import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { WizardPage } from "./pages/WizardPage";

interface Route {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

export const routes: Route[] = [
    {
        path: '/',
        component: LoginPage,
        exact: true
    },
    {
        path: '/wizard',
        component: WizardPage
    }
];