import SearchBar from "./shared/SearchBar";
import {filter_options, imageDetails, trending_search} from '../constants/constant'
import Card from "./shared/Card";

const HomePage=()=>{
    return(
        <>
            <div className="w-full h-screen flex flex-col items-center gap-10 ">
                <div className="tagLine  flex pt-24 justify-center flex-col items-center text-8xl font-semibold">
                    <h1>Discover the world&apos;s</h1>
                    <h1>top designers</h1>
                </div>
                <div className="w-[35%] text-lg flex items-center justify-center text-center">
                    <p className="text-center">Explore work from the most talented and accomplished designers ready to take on your next project</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <SearchBar/>
                </div>
                <div className="flex  gap-4 items-center">
                    <h1 className="text-zinc-400 text-lg font-medium">Trending Searches</h1>
                    {
                        trending_search.map((item,index)=>{
                            return(
                                <div key={index} className="flex ">
                                    <p className="px-2 text-sm font-light rounded-full text-  py-1 bg-zinc-100">{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex gap-14 ">
                    {
                        filter_options.map((item,index)=>{
                            return(
                                <div key={index} className="flex gap-4 items-center">
                                    <p className="px-2 text-sm font-medium rounded-full text-  py-1 ">{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full gap-10   grid grid-rows-5 grid-cols-4 px-36">
                    {
                        imageDetails?.map((item,index)=>{
                            return(
                                <Card key={index} imageDetails={item}/>
                            )
                        })
                    }
                </div>
                <div className="-mt-10 h-20 w-full py-12 px-10">
                    <footer className="text-sm font-light flex justify-between justify-center items-center px-72">
                        <div className="flex  gap-4 items-center ">
                                <h1>@2024 Dribbble</h1>
                                <h1>Terms</h1>
                                <h1>Privacy</h1>
                                <h1>Cookies</h1>
                        </div>
                        <div className="flex gap-4 items-center -mr-28">
                            <h1>Jobs</h1>
                            <h1>Designers</h1>
                            <h1>Freelancers</h1>
                            <h1>Tags</h1>
                            <h1>Places</h1>
                            <h1>Resources</h1>
                        </div>
                        <div>

                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default HomePage;