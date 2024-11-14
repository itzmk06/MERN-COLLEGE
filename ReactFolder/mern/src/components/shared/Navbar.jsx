const NavBar=()=>{
    return(
        <div className="w-full h-14 py-2  ">
            <div className="flex justify-between items-center py-2 px-4">
            <div className="">
                <img className="w-28" src="https://imgs.search.brave.com/8S4-Z1SEK0dg31NDc_emLpenIMkCPg4XLDCm2C7NcSI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0QvZHJpYmJi/bGUtbG9nby1DODND/QzI4NTUyLXNlZWts/b2dvLmNvbS5wbmc"></img>
            </div>
            <div>
                <div className="flex gap-20 -right-12 justify-center items-center text-lg font-medium">
                    <div>
                        <h1>Explore</h1>
                        <i className="fi fi-br-angle-small-down"></i>
                    </div>
                    <h1>Hire a designer</h1>
                    <h1>Find Jobs</h1>
                    <h1>Blog</h1>
                </div>
            </div>
                <div className="flex justify-center items-center mt-1 gap-3 font-medium">
                    <button className="w-fit px-4 py-1 cursor-pointer rounded-full">Sign up</button>
                    <button className="w-fit px-4 py-1 cursor-pointer bg-black text-white rounded-full">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;