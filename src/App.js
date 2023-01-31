import "./App.css";
import axios from "axios";
import { useState } from "react";
import Loader from "./components/Loader";
import Display from "./components/Display";
import { useQuery } from "react-query";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  const getCharacters = async ({ queryKey }) => {
    let res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
    );
    return res.data.results;
  };

  const gotoNextPage = () => {
    setCurrentPage(currentPage + 1);
    setPrevPage(prevPage + 1);
  };

  const gotoPrevPage = () => {
    setCurrentPage(currentPage - 1);
    setPrevPage(prevPage - 1);
  };
  const { data, error, isLoading } = useQuery(
    ["characterQuery", currentPage],
    getCharacters
  );

  if (isLoading) return <Loader />;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="App scrollbar-hide h-full">
      <Display
        characterArray={data}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
