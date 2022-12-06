import { useState } from 'react';
import Allpages from '../Routes/Allpages'
import HomePage from './HomePage';

export default function Routes(){
    const [showHome, setShowHome] = useState("false");
    return <>{showHome === "true" ? <HomePage/> : <Allpages/>}</>;
}