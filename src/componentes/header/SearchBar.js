import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button } from 'react-bootstrap'; // Importa los componentes de Bootstrap que necesitas

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('/search', { query });
            setResults(response.data);
        } catch (error) {
            console.error('Error al buscar:', error);
        }
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    aria-describedby="basic-addon2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="outline-danger" id="button-addon2" onClick={handleSearch}>
                    Buscar
                </Button>
            </InputGroup>
            <ul className="list-group">
                {results.map((result) => (
                    <li key={result.id} className="list-group-item">{result.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
