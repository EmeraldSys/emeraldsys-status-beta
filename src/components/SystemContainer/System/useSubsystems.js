import * as React from "react"

export default (systemId) => {
    const [results, setResults] = React.useState([]);
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const isServer = typeof window === undefined

    React.useEffect(() => {
        if (!isServer) {
            if (
                new Date(localStorage.getItem(`lastFetch${systemId}`)) <
                new Date() - 240000
            ) {
                fetchSubsystems(setLoading, setError, setResults, systemId);
            } else {
                setResults(JSON.parse(localStorage.getItem(`cacheSub${systemId}`)));
                setLoading(false);
                setError();
            }
        }
    }, [systemId]);

    return [
        loading,
        error,
        results || [],
        () => fetchSubsystems(setLoading, setError, setResults, systemId)
    ];
};

const fetchSubsystems = (setLoading, setError, setResults, systemId) => {
    setLoading(true);
    fetch(
        `https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=all&labels=subsystem,${systemId}`
    ).then(response => {
        return response.json();
    }).then(data => {
        setError();
        localStorage.setItem(`lastFetch${systemId}`, new Date());
        localStorage.setItem(`cacheSub${systemId}`, JSON.stringify(data));
        setResults(data);
        setLoading(false);
    }).catch(error => {
        setError(error.toString());
        localStorage.setItem(`lastFetch${systemId}`, new Date());
        setResults(JSON.parse(localStorage.getItem(`cacheSub${systemId}`)));
        setLoading(false);
    });
};