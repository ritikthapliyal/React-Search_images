import './App.css';
import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {

    const [images,setImages] = useState([])

    const handleImageSearch = async (searchTerm)=>{
      const images = await searchImages(searchTerm)
      setImages(images)
    } 

    return (
      <div className="App">
        <SearchBar handleImageSearch={handleImageSearch}/>
        <ImageList images={images}/>
      </div>
    );
}

export default App;