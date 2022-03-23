import * as React from "react"

const useIssues = label => {
    const [results, setResults] = React.useState([]);
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const isServer = typeof window === undefined;

    React.useEffect(() => {
        if (!isServer) {
            
        }
    }, [label]);
}

export default useIssues

const fetchData = (setLoading, setError, setResults, label) => {
    setLoading(true);
    fetch(
        `https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=all&labels=${label}`
    ).then(response => {
        return response.json();
    }).then(data => {
        setError();
    });
};