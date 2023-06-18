import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { WizardPage } from "./pages/WizardPage";

interface Claim {
    type: string;
    value?: string;
}

interface Route {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
    roles?: string[];
    claims?: Claim[];
}

export const routes: Route[] = [
    {
        path: '/',
        component: LoginPage,
        exact: true
    },
    {
        path: '/wizard',
        component: WizardPage,
        roles: ['Leader'],
        claims: [
            { type: 'team' },
            { type: 'leader' }
        ]
    }
];