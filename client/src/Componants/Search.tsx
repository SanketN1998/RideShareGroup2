

const Search = () => {
  return (
    <div className="bg-white-100 flex justify-center mt-5 px-20">
      <div className="space-y-1">
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <input className="bg-gray-100 outline-none" type="text" placeholder="From" />
          </div>
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <input className="bg-gray-100 outline-none" type="text" placeholder="To" />
          </div>
          <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
