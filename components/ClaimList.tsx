"use client";

import { Claim, DEFAULT_CLAIMS, populateClaimValues } from "@/util/auth";

function createClaimListEntry(claim: Claim) {
    return (
        <p className="flex border-l-2 border-primary mb-2" key={claim.key}>
            <span className="w-32 float-left pl-4">
                <b>{claim.humanReadableName}:</b><br/>
                ({claim.key})</span>
            <span className="w-32 float-right pl-6">{claim.value}</span>
        </p>
    );
}

export default function ClaimList() {
    const displayedClaims: Array<Claim> = populateClaimValues(DEFAULT_CLAIMS);

    return (
        <div className="mt-8 mb-2 text-xs flex flex-col justify-center items-center">
            {displayedClaims.map(createClaimListEntry)}
        </div>
    );
}
