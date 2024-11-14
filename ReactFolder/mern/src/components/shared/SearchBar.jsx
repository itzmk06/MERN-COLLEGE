const SearchBar=()=>{
    return(
        <>
            <div className="w-[40%] rounded-full px-4 py-4 justify-between  flex  h-14 bg-zinc-100">
                <div className="flex  w-full">
                    <input className="bg-transparent w-full outline-none " type='text' placeholder="what are you looking for?" />
                </div>
                <div className="w-fit cursor-pointer">
                <img className="w-6  flex justify-end right-0" src="https://cdn-icons-png.flaticon.com/128/3917/3917132.png" />
                </div>
            </div>
        </>
    )
};

export default SearchBar;