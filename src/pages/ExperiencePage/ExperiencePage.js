import React from 'react';
import { SideBar } from "../../components/SideBar/SideBar"
import { TopBar } from "../../components/TopBar/TopBar"
import { TimelineContent } from "../../components/TimelineContent/TimelineContent"

export function ExperiencePage() {

    return (
        <div>
            <SideBar title={'EXPERIENCE'}/>
            <TopBar />
            <TimelineContent filter={'experience'}/>
        </div>
    );
}
