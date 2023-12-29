import React, {useEffect, useState} from 'react';
import RootLayout from "@/app/layout";

const Profile = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient
                && (
                    <RootLayout>
                        <div>its profile page</div>
                    </RootLayout>
                )
            }
        </>
    );
};

export default Profile;