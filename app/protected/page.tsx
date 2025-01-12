"use client";

import { useEffect, useState } from "react";
import { Button, LinkButton } from "@/components/Button";
import { isLoggedIn, performLogout } from "@/util/auth";
import ClaimList from "@/components/ClaimList";
import Link from "next/link";

export default function ProtectedPage() {
    let apiBase = "http://localhost:5186";
    let [loggedIn, setLoggedIn] = useState<boolean>(false);
    useEffect(() => setLoggedIn(isLoggedIn()), []);

    const [protectedResource, setProtectedResource] = useState<string>("");

    function fetchProtectedResource(apiBase: string) {
        fetch(`${apiBase}/api/v1/protected-resource`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((apiResult) => {
            apiResult
                .text()
                .then((text) => setProtectedResource(text));
        });
    }

    return (
        <div>
            <p className="text-2xl mt-16 text-center leading-tight">
                Geschützte Seite
            </p>
            <p className="text-lg mb-8 leading-tight"></p>

            {!loggedIn ? (
                <div>
                    <p className="text-center mb-16">
                        Sie sind nicht angemeldet.
                        <br />
                        <b>
                            Nur angemeldete Benutzer:innen können auf diese
                            Seite zugreifen.
                        </b>
                    </p>

                    <div className="mt-16">
                        <LinkButton url={`${apiBase}/api/v1/login`}>
                            Mit ID Austria einloggen
                        </LinkButton>
                    </div>

                    <p className="mt-8 text-center">
                        <Link href="/tos.txt" className="underline">Es werden keine Ihrer Daten dauerhaft gespeichert.</Link>
                    </p>
                </div>
            ) : (
                <div>
                    <p className="mt-16 text-center">
                        <b>Sie sind erfolgreich angemeldet!</b>
                        <br />
                        Benutzer:innen, welche sich erfolgreich angemeldet
                        haben, können auf dieser Seite ihre Daten einsehen.
                        <br />
                        <br />
                        Durch den Login stehen dank ID Austria folgende Daten
                        zur Verfügung:
                    </p>

                    <ClaimList />

                    <div className="mt-8">
                        <p className="mb-8 text-center">
                            Dies ist eine Geschützte Ressource, welche vom
                            Server geladen wurde:
                            <br />
                            <b>{protectedResource || "Noch nicht geladen"}</b>
                        </p>
                        <Button
                            onClick={() =>
                                fetchProtectedResource(apiBase)
                            }
                        >
                            Geschützten Inhalt vom Server laden
                        </Button>
                    </div>

                    <div className="mt-8">
                        <Button onClick={performLogout}>Ausloggen</Button>
                    </div>
                    <p className="mt-16 text-center">
                        Ein Dienst, welcher ID Austria als Identity Provider
                        nutzt, könnte diese Daten verwenden, um Benutzerprofile
                        zu erstellen oder um Benutzerdaten zu validieren.
                    </p>
                </div>
            )}
        </div>
    );
}

