import {createLazyFileRoute} from "@tanstack/react-router";
import {Register} from "../register/Register";

export const Route = createLazyFileRoute("/register")({
    component: RouteComponent,
});

function RouteComponent() {
    return <Register/>;
}
