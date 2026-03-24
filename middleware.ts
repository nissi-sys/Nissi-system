import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|uploads|logo1.png|simbolo.png|nissi_completo_W.png|nissi_completo_B.png|nissi_logo_B.png).*)"],
};
