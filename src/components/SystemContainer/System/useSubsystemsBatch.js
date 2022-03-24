import * as React from "react"

export default (systems) => {
    const [results, setResults] = React.useState();
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        
    }, [systems]);
};

const fetchSubsystems = (setLoading, setError, setResults, systems) => {
    let temp = {};
    for (var i = 0; i < systems.length; i++) {
        const system = systems[i];
    }
};