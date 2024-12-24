import * as React from "react";
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {Navigation} from "../navigation/Navigation";
import {Footer} from "../components/footer/Root";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}
