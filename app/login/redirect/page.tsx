"use client";

import { isLoggedIn } from "@/util/auth";
import { redirect, useSearchParams } from "next/navigation";

export default function Redirect() {
    // Get the token from the URL query parameters once the OIDC flow is completed
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    
    if (token) {
        localStorage.setItem("accessToken", token);
    }

    if (isLoggedIn()) {
        redirect("/protected");
    }
}
