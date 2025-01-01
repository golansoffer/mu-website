import {createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/play")({
    component: RouteComponent,
});

function RouteComponent() {
    return <main>Hello "/play"!</main>;
}
