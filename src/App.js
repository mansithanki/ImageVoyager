import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useAxios from "./hooks/useAxios";


// Create Context
export const ImageContext = createContext();


function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=puppies&client_id=${process.env.REACT_APP_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  // return (
  //   <>
  //  <Header>
  //   <SearchBar/>
  //  </Header>
  //  <Images/>
  //  </>
  // );

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchBar />
      </Header>
      <Images />
    </ImageContext.Provider>
  );

}

export default App;
