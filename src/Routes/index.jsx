import { useState } from 'react';

import ChangeNavigationService from '../service/ChangeNavigationService';

import Allpages from '../Routes/Allpages'
import HomePage from './HomePage';

export default function Routes(){
    const [showHome, setShowHome] = useState("false");

    ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
        setShowHome(showHome.showHome);
    })
    .catch((err) => console.log(err));

    return <>{showHome === "true" ? <HomePage/> : <Allpages/>}</>;
}