import * as React from "react"
import statuses from "./statuses"

export default (labels) => {
    const [status, setStatus] = React.useState(statuses.unknown.name);
    const [bgColor, setBgColor] = React.useState(statuses.unknown.bgColor);
    const [color, setColor] = React.useState("");

    React.useEffect(() => {
        if (labels !== undefined) {
            console.log(labels);
            const result = Object.values(statuses).find(stat =>
                labels.find(label => label.name === stat.id)
            );
            console.log(result);
            setStatus(result.name);
            setBgColor(result.bgColor);
            setColor(result.color);
        }
    }, [labels]);

    return [status, bgColor, color];
};