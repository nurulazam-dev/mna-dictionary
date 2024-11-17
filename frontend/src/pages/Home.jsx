import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">
        Welcome to the Dictionary App
      </h1>
      <SearchBar />
    </div>
  );
};

export default Home;
