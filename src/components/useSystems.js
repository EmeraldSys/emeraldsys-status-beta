import * as React from "react"

export default () => {
    const [results, setResults] = React.useState([]);
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const isServer = typeof window === undefined;

    React.useEffect(() => {
        if (!isServer) {
            /* if (
                new Date(localStorage.getItem("lastFetchSystems")) <
                new Date() - 240000
            ) {
                fetchSystems(setLoading, setError, setResults);
            } else {
                setResults(JSON.parse(localStorage.getItem("cacheSystems")));
                setLoading(false);
                setError();
            } */
            fetchSystems(setLoading, setError, setResults);
        }
    }, []);

    return [
        loading,
        error,
        results || [],
        () => fetchSystems(setLoading, setError, setResults)
    ];
};

const fetchSystems = (setLoading, setError, setResults) => {
    setLoading(true);
    fetch(
        "https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=all&labels=system",
        {
            cache: "no-cache"
        }
    ).then(response => {
        return response.json();
    }).then(data => {
        setError();
        //localStorage.setItem("lastFetchSystems", new Date());
        //localStorage.setItem("cacheSystems", JSON.stringify(data));
        setResults(data);
        setLoading(false);
    }).catch(error => {
        setError(error.toString());
        //localStorage.setItem("lastFetchSystems", new Date());
        //setResults(JSON.parse(localStorage.getItem("cacheSystems")));
        setLoading(false);
    });
};