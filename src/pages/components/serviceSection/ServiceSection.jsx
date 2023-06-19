import "./serviceComponents/ServiceSection.css";

import MainServiceSection from './serviceComponents/MainServiceSection';
import ServiceDevPo from './serviceComponents/ServiceDevPo';
import ServiceDesign from './serviceComponents/ServiceDesign';
import ServiceOneAssemRepair from './serviceComponents/ServiceOneAssemRepair';
import ServiceBot from './serviceComponents/ServiceBot'
import { useState } from "react";

const ServiceSection = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);
    
    const handleComponentClick = (id) => {
        setSelectedComponent(id);
    }

    return (
        <div className="service__component">
            {selectedComponent === 0 && (<MainServiceSection func={handleComponentClick}/>)}
            {selectedComponent === 1 && (<ServiceDevPo func={handleComponentClick}/>)}
            {selectedComponent === 2 && (<ServiceDesign func={handleComponentClick}/>)}
            {selectedComponent === 3 && (<ServiceOneAssemRepair func={handleComponentClick}/>)}
            {selectedComponent === 4 && (<ServiceBot func={handleComponentClick}/>)}
        </div>
    );
}

export default ServiceSection;