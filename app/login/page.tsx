import Link from "next/link";
import { Button, DownloadButton, LinkButton } from "@/components/Button";

export type Claim = {
    name: string;
    value: string;
};

function createClaimListEntry(claim: Claim) {
    return (
        <p className="flex border-l-2 border-primary mb-2" key={claim.name}>
            <span className="w-24 text-left pl-4">{claim.name}:</span>
            <span className="flex-1 pl-6">{claim.value}</span>
        </p>
    );
}

export default function Login() {
    const user = undefined;

    const claims: Array<Claim> = [
        { name: "uid", value: "David-Alexander Kraus" },
        { name: "email", value: "s2210239019@fh-ooe.at" },
    ];

    return (
        <div>
            <Link href="/">
                <p className="text-2xl mt-16 text-center leading-tight">
                    ID Austria Demo Login
                </p>
            </Link>
            <p className="text-lg mb-8 leading-tight"></p>

            <p className="mt-16 text-center">
                Auf dieser Seite kann ein Demo-Login mit ID Austria durchgeführt
                werden.<br/>
                <Link href="/tos.txt" className="underline">Es werden keine Ihrer Daten dauerhaft gespeichert.</Link>
            </p>

            {!user && (
                <div className="mt-16">
                    <Button>
                        Mit ID Austria einloggen
                    </Button>
                </div>
            )}

            {user && (
                <div>
                    <p className="mt-16 text-center">
                        <b>Sie sind erfolgreich angemeldet!</b>
                        <br />
                        Durch den Login stehen dank ID Austria folgende Daten
                        zur Verfügung:
                    </p>
                    <div className="mt-8 mb-2 text-xs flex flex-col justify-center items-center">
                        {claims.map(createClaimListEntry)}

                        <div className="mt-8">
                            <Button>Ausloggen</Button>
                        </div>
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
