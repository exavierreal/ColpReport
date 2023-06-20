import { useState } from "react";
import { AlmostThere } from "./Components/AlmostThere";
import { NewLeader } from "./Components/NewLeader";
import { NewLeaderInfos } from "./Components/NewLeaderInfos";
import { NewTeam } from "./Components/NewTeam";
import { Welcome } from "./Components/Welcome";
import { useNavigate } from "react-router-dom";
import { clearAuthToken, clearUserToken } from "../../auth/useAuth";


export function WizardPage() {
    const [indexPageWizard, setIndexPageWizard] = useState(0);
    const navigate = useNavigate();
    
    function handlePageWizard (userHasBack: boolean, userHasClose?: boolean) {
        if (userHasClose) {
            clearAuthToken();
            clearUserToken();

            navigate('/');
        }
        
        var valueOfIndex = userHasBack ? indexPageWizard - 1 : indexPageWizard + 1;

        setIndexPageWizard(valueOfIndex);
    }

    switch(indexPageWizard) {
        case 0:
            return <AlmostThere index={indexPageWizard} handlePageWizard={handlePageWizard} />
        case 1:
            return <NewTeam index={indexPageWizard} handlePageWizard={handlePageWizard} />
        case 2:
            return <NewLeader index={indexPageWizard} handlePageWizard={handlePageWizard} />
        case 3:
            return <NewLeaderInfos index={indexPageWizard} handlePageWizard={handlePageWizard} />
        case 4:
            return <Welcome index={indexPageWizard} handlePageWizard={handlePageWizard} />
        default:
            return <h1>Deu ruim</h1>;
    }
} 