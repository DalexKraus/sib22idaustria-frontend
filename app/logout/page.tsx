"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {

    useEffect(() => {
        localStorage.removeItem("accessToken");
        setTimeout(() => {
            redirect("/");
        }, 3000);
    });

    return (
        <div>
            <p className="text-2xl mt-16 text-center leading-tight">
                ID Austria Integration
            </p>
            <p className="text-lg mb-8 leading-tight"></p>

            <p className="mt-16 text-center">
                <b>Abmeldung erfolgreich.</b>
                <br />
                <span className="text-xs">Sie werden in 3 Sekunden zur Startseite weitergeleitet ...</span>
            </p>
        </div>
    );
}
