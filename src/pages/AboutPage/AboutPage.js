import React from 'react';
import { SideBar } from "../../components/SideBar/SideBar"
import { TopBar } from "../../components/TopBar/TopBar"
import { AboutContent } from "../../components/AboutContent/AboutContent"

export function AboutPage() {

    return (
        <div>
            <SideBar title={'ABOUT'}/>
            <TopBar />
            <AboutContent />
        </div>
    );
}
