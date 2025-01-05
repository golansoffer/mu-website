import {createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/news")({
    component: RouteComponent,
});

function RouteComponent() {
    return <main>Hello "/news"!</main>;
}
