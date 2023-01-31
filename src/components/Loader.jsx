const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-bgclr flex justify-center items-center flex-col">
      <img
        src={require("../assets/images/rick-dancing.gif")}
        alt="rick dancing"
        className="w-2/5"
      />
      <span className="text-2xl text-white font-bold mt-4">Loading...</span>
    </div>
  );
};
export default Loader;
