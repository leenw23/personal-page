import React from 'react';
import { SideBar } from "../../components/SideBar/SideBar"
import { TopBar } from "../../components/TopBar/TopBar"
import { TimelineContent } from "../../components/TimelineContent/TimelineContent"

export function TimelinePage() {

    return (
        <div>
            <SideBar title={'TIMELINE'}/>
            <TopBar />
            <TimelineContent filter={''}/>
        </div>
    );
}
