import * as React from "react";
import {createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <main>
            <h3>Shop</h3>
        </main>
    );
}
