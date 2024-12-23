import * as React from "react";
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {Navigation} from "../navigation/Navigation";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
}
