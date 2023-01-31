import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Display from "./components/Display";

function App() {
  const [loading, setLoading] = useState(true);
  const [characterArray, setCharacterArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  let api = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  useEffect(() => {
    const getCharacters = async () => {
      axios
        .get(api)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          setCharacterArray(data.results);
          setTimeout(() => setLoading(false), 1500);
        });
    };
    getCharacters();
  }, [api]);

  const gotoNextPage = () => {
    setCurrentPage(currentPage + 1);
    setPrevPage(prevPage + 1);
  };

  const gotoPrevPage = () => {
    setCurrentPage(currentPage - 1);
    setPrevPage(prevPage - 1);
  };
  return (
    <div className="App scrollbar-hide h-full">
      {loading && <Loader />}
      {!loading && (
        <Display
          characterArray={characterArray}
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
