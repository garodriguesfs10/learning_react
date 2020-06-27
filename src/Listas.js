import React, { useState, useEffect } from 'react'

export default function Listas() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        async function getRepo() {
            const response = await fetch('https://api.github.com/users/diego3g/repos');
            const data = await response.json()
            setRepositories(data)
        }

        getRepo();

    }, [])
    //primeiro param , funcao que sera executada
    //segundo parametro do useEffect quais circuntancias essa funcao deve ser executada
    function handleAddrepository() {
        setRepositories([...repositories, { id: Math.random(), name: 'Novo Repo' }])
    }

    function handleFavorite(id) {
        const newFavorites = repositories.map(repo => {
            return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
        })

        setRepositories(newFavorites)
    }
    return (
        <div>
            <ul>
                
                {repositories.map(repo => (
                    <li key={repo.id}>
                        {repo.name} 
                        <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
                        {repo.favorite && <span>(Favorito)</span>}
                    </li>

                ))}
            </ul>
            <button onClick={handleAddrepository}>Add Repositorio</button>
        </div>
    )
}