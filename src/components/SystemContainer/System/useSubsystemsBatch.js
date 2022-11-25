import * as React from "react"

export default (systems) => {
    const [results, setResults] = React.useState();
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchSubsystems(setLoading, setError, setResults, systems);
    }, [systems]);

    return [
        loading,
        error,
        results || {},
        () => fetchSubsystems(setLoading, setError, setResults, systems)
    ];
};

const fetchSubsystems = (setLoading, setError, setResults, systems) => {
    setLoading(true);
    let temp = {};
    for (var i = 0; i < systems.length; i++) {
        const system = systems[i];
        fetch(
            `https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=open&labels=subsystem,${system.title}`,
            {
                cache: "no-cache"
            }
        ).then(response => {
            return response.json();
        }).then(data => {
            setError();
            temp[system.title] = data;
        }).catch(error => {
            setError(error.toString());
            setLoading(false);
            throw new Error(error.toString());
        });
    }
    setResults(temp);
    setLoading(false);
};