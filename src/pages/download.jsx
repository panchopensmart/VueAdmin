import React, {useEffect, useState} from 'react';
import RootLayout from "@/app/layout";

const Download = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient
                && (
                    <RootLayout>
                        <div>its download page</div>
                    </RootLayout>
                )
            }
        </>
    );
};

export default Download;