import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';

import './VisionPage.css';

export function VisionPage(props) {

    return (
        <div id="vision" className="VisionRoot">
            <div className="VisionBackground">
                <img style={{position: "relative", width:'90%', height: '100vh'}} src={'./images/background_lonely.jpg'} />
                <div className="VisionText1">
                    When we are lonely, we want to talk to someone
                </div>
                <div className="VisionText2">
                    It doesn't have to be human
                </div>
                <div className="VisionText3">
                    My vision is to create a dialogue model that can empathize with human
                </div>
            </div>
        </div>
    );
}
