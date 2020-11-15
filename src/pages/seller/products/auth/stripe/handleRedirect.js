import React from "react";
import Link from "next/link";

function HandleRedirectPage() {
    //ADD ACCOUNT ID AND OTHER STUFF

    return(
        <div>
            Hell you went succesfully.
            <Link href={'/seller/products/dashboard'}>
                <a>
                  Go to dashboard
                </a>
            </Link>
        </div>
    )
}

export default HandleRedirectPage;