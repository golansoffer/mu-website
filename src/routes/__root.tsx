import * as React from "react";
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {Navigation} from "../navigation/Navigation";
import {Footer} from "../components/footer/Root";
import {ModalProvider} from "../components/modal/ModalContext";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <ModalProvider>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </ModalProvider>
    );
}
