import { useRef } from "react";

const Display = ({
  characterArray,
  gotoNextPage,
  gotoPrevPage,
  currentPage,
}) => {
  const listInnerRef = useRef();

  return (
    <div className="w-full h-full max-h-full bg-bgclr flex items-center">
      {currentPage > 1 && (
        <button
          className="fixed top-1/2 left-2 h-10 w-10 rounded-full bg-fgclr shadow-sm shadow-white text-white"
          onClick={gotoPrevPage}>
          Prev
        </button>
      )}
      <button
        className="fixed top-1/2 right-2 h-10 w-10 rounded-full bg-fgclr shadow-sm shadow-white text-white"
        onClick={gotoNextPage}>
        Next
      </button>
      <div
        className="w-full h-full max-h-full flex flex-wrap items-center justify-center mt-4 overflow-auto scrollbar-hide"
        onScroll={() => console.log("scrolling")}>
        {characterArray.map((character, id) => (
          <div
            className="
          h-32 w-80 bg-fgclr text-white m-4 flex items-center rounded-xl overflow-hidden
          "
            key={id}>
            <img
              src={character.image}
              alt={character.name}
              className="max-h-full"
            />
            <div className="w-full h-full flex flex-col">
              <span className="w-full p-2 font-bold self-start text-center text-lg">
                {character.name}
              </span>
              <span className="w-full sefl-start text-center text-sm">
                <em>
                  ({character.species}, {character.status})
                </em>
              </span>
              <span className="text-sm">
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
