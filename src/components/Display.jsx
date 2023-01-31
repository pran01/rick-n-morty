const Display = ({
  characterArray,
  gotoNextPage,
  gotoPrevPage,
  currentPage,
}) => {
  return (
    <div className="w-full h-full max-h-full bg-bgclr flex flex-col justify-center">
      <h1 className="text-lg mt-4 text-white font-bold">
        Rick and Morty API with React-Query
      </h1>
      {currentPage > 1 && (
        <button
          className="fixed top-1/2 left-2 h-10 w-10 rounded-full bg-fgclr shadow-sm shadow-white text-white"
          onClick={gotoPrevPage}>
          <i className="fa-solid fa-caret-left md:text-xl"></i>
        </button>
      )}
      <button
        className="fixed top-1/2 right-2 h-10 w-10 rounded-full bg-fgclr shadow-sm shadow-white text-white"
        onClick={gotoNextPage}>
        <i className="fa-solid fa-caret-right md:text-xl"></i>
      </button>
      <div className="w-full h-full max-h-full flex flex-wrap items-center justify-center mt-2 overflow-auto scrollbar-hide">
        {characterArray.map((character, id) => (
          <div
            className="
          h-28 w-64 md:h-32 md:w-80 bg-fgclr text-white m-4 flex items-center rounded-xl overflow-hidden
          "
            key={id}>
            <img
              src={character.image}
              alt={character.name}
              className="max-h-full"
            />
            <div className="w-full h-full flex flex-col">
              <span className="w-full p-2 font-bold self-start text-center text-md md:text-lg">
                {character.name}
              </span>
              <span className="w-full sefl-start text-center text-xs md:text-sm">
                <em>
                  ({character.species}, {character.status})
                </em>
              </span>
              <span className="text-xs md:text-sm p-2">
                Location: {character.location.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
