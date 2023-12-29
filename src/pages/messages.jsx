import React, {useEffect, useState} from 'react';
import RootLayout from "@/app/layout";

const Messages = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient
                && (
                    <RootLayout>
                        <div>its messages page</div>
                    </RootLayout>
                )
            }
        </>
    );
};

export default Messages;