import * as React from "react"

export default (systemId) => {
    const [results, setResults] = React.useState([]);
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    /* if (
        new Date(localStorage.getItem(`lastFetch${systemId}`)) <
        new Date() - 240000
    ) {
        fetchSubsystems(setLoading, setError, setResults, systemId);
    } else {
        setResults(JSON.parse(localStorage.getItem(`cacheSub${systemId}`)));
        setLoading(false);
        setError();
    } */
    React.useEffect(() => {
        fetchSubsystems(setLoading, setError, setResults, systemId);
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
        `https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=open&labels=subsystem,${systemId}`,
        {
            cache: "no-cache"
        }
    ).then(response => {
        return response.json();
    }).then(data => {
        setError();
        //localStorage.setItem(`lastFetch${systemId}`, new Date());
        //localStorage.setItem(`cacheSub${systemId}`, JSON.stringify(data));
        setResults(data);
        setLoading(false);
    }).catch(error => {
        setError(error.toString());
        //localStorage.setItem(`lastFetch${systemId}`, new Date());
        //setResults(JSON.parse(localStorage.getItem(`cacheSub${systemId}`)));
        setLoading(false);
    });
};