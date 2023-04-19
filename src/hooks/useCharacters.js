import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql `
query{
    characters{
        results{
            id
            name
            image
            status
            gender
            species
        }
    }
}
`

const useCharacters = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS)

    return{
        error,
        data,
        loading
    }
}

export default useCharacters;
