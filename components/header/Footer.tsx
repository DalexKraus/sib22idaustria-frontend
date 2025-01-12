import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
      <footer className="w-full h-16">
        <div className="mb-4 w-full h-[2px] border-b-2 border-primary"></div>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            &copy; {currentYear} David-Alexander Kraus.
            <br />
            Alle Rechte vorbehalten.
          </p>
          <nav>
            <ul className="flex space-x-2 text-xs">
              <li>
                <Link href="/tos.txt" className="hover:underline text-text">
                  Impressum / Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
  