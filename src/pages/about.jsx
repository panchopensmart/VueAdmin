import React, {useEffect, useState} from 'react';
import RootLayout from "@/app/layout";

const About = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient
                && (
                    <RootLayout>
                        <div>its about page</div>
                    </RootLayout>
                )
            }
        </>
    );
};

export default About;