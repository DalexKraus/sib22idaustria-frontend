import Link from "next/link";
import { DownloadButton, LinkButton } from "@/components/Button";

export default function Home() {
    return (
        <div>
            <p className="text-2xl mt-16 text-center leading-tight">
                ID Austria Integration
            </p>
            <p className="text-lg mb-8 leading-tight"></p>

            <p className="mt-16">
                Warum nutzen in Österreich nicht mehr Online-Dienste ID Austria
                für die Bereitstellung von Login-Funktionalitäten? Dieses
                Projekt untersucht die Potenziale und Herausforderungen bei der
                Integration von ID Austria als Identity Provider in private
                Anwendungen.
            </p>

            <div className="mt-16">
                <LinkButton url="/login">Zum Demo-Login</LinkButton>
            </div>

            <p className="mt-16">
                Diese Website ist Teil einer Bachelorarbeit an der FH Hagenberg.<br/>
                Ziel der Arbeit ist es, die Vorteile von ID Austria zu analysieren und
                praktische Beispiele für die Implementierung bereitzustellen
                sowie eventuelle Herausforderungen zu identifizieren und zu dokumentieren.
            </p>

            <p className="mt-8">Kontakt:</p>
            <div className="mt-4 mb-2 text-xs">
                <p className="flex border-l-2 border-primary mb-2">
                    <span className="w-24 text-left pl-4">Author:</span>
                    <span className="flex-1 pl-6">
                        David-Alexander Kraus
                        <br/>
                        <br/>
                        FH OÖ Campus Hagenberg
                        <br/>
                        Sichere Informationssysteme
                        <br/>
                        Jahrgang 2022
                    </span>
                </p>
                <p className="flex border-l-2 border-primary">
                    <span className="w-24 text-left pl-4">E-Mail:</span>
                    <span className="flex-1 pl-6 break-all">
                        s2210239019@fh-ooe.at
                    </span>
                </p>
            </div>
        </div>
    );
}
