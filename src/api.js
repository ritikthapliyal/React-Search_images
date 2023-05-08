import axios from 'axios'

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 1Uy8dtm6shnwkIwPBtmPw0eKMLWzKnXMjm9lQA2sKDI'
        },
        params:{
            query : searchTerm
        }
    })
    
    return response.data.results
}

export default searchImages