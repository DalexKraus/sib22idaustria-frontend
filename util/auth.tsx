import { jwtDecode } from "jwt-decode";
import { redirect, useSearchParams } from "next/navigation";

export type Claim = {
    key: string;
    humanReadableName: string;
    parseValue?: (value: string) => string;
    value?: string;
};

export const DEFAULT_CLAIMS: Array<Claim> = [
    {
        key: "given_name",
        humanReadableName: "Vorname",
    },
    {
        key: "family_name",
        humanReadableName: "Nachname",
    },
    {
        key: "uid",
        humanReadableName: "Benutzer-ID",
    },
    {
        key: "email",
        humanReadableName: "E-Mail",
    },
    {
        key: "birthdate",
        humanReadableName: "Geburtsdatum",
    },
    {
        key: "iat",
        humanReadableName: "Token Ausgestellt am",
        parseValue: parseDate,
    },
    {
        key: "exp",
        humanReadableName: "Token gültig bis",
        parseValue: parseDate,
    },
    {
        key: "auth_time",
        humanReadableName: "Authentifiziert um",
        parseValue: parseDate,
    },
];

function parseDate(value: string) {
    return new Date(parseInt(value) * 1000).toLocaleString();
}

export function populateClaimValues(claims: Array<Claim>): Array<Claim> {
    // Deep copy the claims array
    const populatedClaims = Object.assign([], claims);

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        const jwt = jwtDecode(accessToken, {});
        populatedClaims.forEach((claim: Claim) => {
            const claimName = claim.key;
            const claimValue = (jwt as any)[claimName];

            // Let the claim define how to parse the value
            if (claim.parseValue) {
                claim.value = claim.parseValue(claimValue);
            }

            // parseValue callback did not set the value
            if (!claim.value) {
                // Set the value to the claim value or a default value
                claim.value = claimValue ?? "Nicht verfügbar";
            }
        });
    }
    return populatedClaims;
}

export function getAccessToken(): string | null {
    return localStorage.getItem("accessToken");
}

export function isLoggedIn(): boolean {
    return !!getAccessToken();
}

export function performLogout() {
    redirect("/logout");
}
