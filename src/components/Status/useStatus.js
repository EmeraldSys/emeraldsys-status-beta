import * as React from "react"
import statuses from "./statuses"

export default (subsystems) => {
    const [status, setStatus] = React.useState();

    React.useEffect(() => {
        if (subsystems !== undefined) {
            if (getSubsystemLabelPercent(subsystems, "majorOutage") > 0) {
                setStatus(statuses.majorOutage);
            } else if (getSubsystemLabelPercent(subsystems, "partialOutage") > 0) {
                setStatus(statuses.partialOutage);
            } else if (getSubsystemLabelPercent(subsystems, "degradedPerformance") > 0) {
                setStatus(statuses.degradedPerformance);
            } else if (getSubsystemLabelPercent(subsystems, "underMaintenance") > 0) {
                setStatus(statuses.underMaintenance);
            } else {
                setStatus(statuses.operational);
            }
        }
    }, [subsystems]);

    return [status];
};

/* const getSubsystemLabelPercent = (subsystems, label) =>
 (subsystems.filter(subsystem => 
    subsystem.labels.find(subsystemLabel => subsystemLabel.name === label)
 ).length * 100) / subsystems.length; */
const getSubsystemLabelPercent = (subsystems, label) => {
    let arr = [];

    for (var [key, value] of Object.entries(subsystems)) {
        for (var i = 0; i < value.length; i++) {
            arr.push(value[i]);
        }
    }

    let filter = arr.filter(subsystem => subsystem.labels.find(subsystemLabel => subsystemLabel.name === label));
    return (filter.length * 100) / arr.length;
};