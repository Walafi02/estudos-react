import React, { useState, useEffect } from 'react'
// import { async } from 'q'

export default function Exemple(){
    
    const [ repositories, setRepositories ] = useState([])

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/walafi02/repos')
        const data = await response.json()
        
        setRepositories(data)
    }, []);

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite)

        document.title = `Você tem ${filtered.length} repositorios favoritos`
    }, [repositories])

    function handleFavorite(id){
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
        })

        setRepositories(newRepositories)
    }

    return (
        <div>
            { repositories.map(repo => 
                <li key={repo.id}>
                    {repo.name}
                    {repo.favorite && <span> (Favorito)</span>}
                    <button onClick={() => handleFavorite(repo.id)}>favorite!</button>
                </li>
            )}
        </div>
    )
}