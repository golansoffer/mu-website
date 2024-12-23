import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../home/Home";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return <Home/>;
}
