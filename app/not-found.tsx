import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="text-2xl mt-36 mb-4">
                404: Diese Seite existiert nicht
            </h1>
            <p>Es sieht so aus, als ob du dich verlaufen hast.</p>
            <div className="mt-16">
                <Link
                    href="/"
                    className="text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-4"
                >
                    Zurück zur Startseite
                </Link>
            </div>
        </div>
    );
}
