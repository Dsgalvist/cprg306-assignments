import type { ReactNode } from "react";
import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }: { children: ReactNode }) {
    return <AuthContextProvider>{children}</AuthContextProvider>;
}