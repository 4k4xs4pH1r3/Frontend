import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const endpoint = process.env.REACT_APP_ENDPOINT ||
        'http://localhost:3000/welcome/';
        setLoading(true);
        fetch(endpoint)
            .then(res => res.json())
            .then(
                result => {
                    console.log('API Response: ', result);
                    setLoading(false);
                    setData(result.datetime);
                },
                e => {
                    console.log('API Error: ', e);
                    setLoading(false);
                    setError(e);
                }
            )
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {loading && <p>Cargando...</p>}
                {error && <p>Ocurrió un error!</p>}
                <p>La fecha del servidor es: {data}</p>
            </header>
        </div>
    );
}

export default App;
