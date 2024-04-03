import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <div>
      <div className="w-[350px] h-[40px] overflow-hidden flex items-center justify-between">
        <input
          className="h-full border-2 w-full   font-serif rounded-tl-[13px] p-4 text-xl rounded-bl-[13px] bottom-black-1"
          type="text"
          placeholder="Search"
          name="quary"
        />
        <button className="h-full w-[50px] text-2xl bg-orange-500 rounded-tr-[13px] rounded-br-[13px] p-2 ">
          {" "}
          <LuSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
