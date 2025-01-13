"use client";

import { isLoggedIn } from "@/util/auth";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function RedirectHandler() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        if (token) {
            localStorage.setItem("accessToken", token);
        }

        if (isLoggedIn()) {
            redirect("/protected");
        }
    }, [token]);

    return null;
}

export default function Redirect() {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <RedirectHandler />
        </Suspense>
    );
}
