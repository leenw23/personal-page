import React from 'react';
import { SideBar } from "../../components/SideBar/SideBar"
import { TopBar } from "../../components/TopBar/TopBar"
import { TimelineContent } from "../../components/TimelineContent/TimelineContent"

export function PublicationPage() {

    return (
        <div>
            <SideBar title={'PUBLICATION'}/>
            <TopBar />
            <TimelineContent filter={'publication'}/>
        </div>
    );
}
