import * as React from "react"
import statuses from "./statuses"

export default (subsystems) => {
    const [status, setStatus] = React.useState();

    React.useEffect(() => {
        let statusSet = false;
    }, [subsystems]);
};

const getSubsystemLabelPercent = (subsystems, label) =>
 (subsystems.filter(subsystem => 
    subsystem.labels.find(subsystemLabel => subsystemLabel.name === label)
 ).length * 100) / subsystems.length;