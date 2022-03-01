import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Box } from '@chakra-ui/react'
import RepositoryCard from './live-data-card'
import { GITHUB_API_URL } from '../../../constants/github'

const LiveData = () => {
    const { get } = useFetch(GITHUB_API_URL)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        get('/users/agungtri222/repos').then((res) => {
            setRepos(
                res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0,8)
            )
        })
    }, [])

    return(
        <Box mt={4}>
            {repos?.map((repo, index) => (
                <RepositoryCard
                    key={index}
                    title={repo.name}
                    description={repo.description}
                    language={repo.language}
                    url={repo.svn_url}
                    // created_at={repo.created_at}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                />  
            ))}
        </Box>
    )
}

export default LiveData