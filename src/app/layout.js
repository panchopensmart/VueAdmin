"use client";
"use strict";

import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/widgets/Header/Header";
import Panel from "@/widgets/Panel/Panel";
import Footer from "@/widgets/Footer/Footer";
import styled from "@emotion/styled";
import {useEffect} from "react";

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}) {
    const StyledBasicUserBlock = styled.div`
      display: flex;
    `
    const StyledFullUserBlock = styled.body`

    `
    const StyledUserPages = styled.div`
      border: 2px solid #e5e5e5;
      border-radius: 7px;
      height: 80vh;
      width: 100%;
    `
    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <html lang="en">
        <StyledFullUserBlock>
            <Header/>
            <StyledBasicUserBlock>
                <Panel/>
                <StyledUserPages>
                    {children}
                </StyledUserPages>
            </StyledBasicUserBlock>
            <Footer/>
        </StyledFullUserBlock>
        </html>
    )
}
