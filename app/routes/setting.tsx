import { Setting } from "~/pages/setting";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soar" },
    { name: "description", content: "Welcome to Soar" },
  ];
}

export default function Home() {
  return <Setting />;
}
