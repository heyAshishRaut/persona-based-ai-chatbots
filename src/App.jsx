import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import icon from "./assets/icon.svg"
import hiteshsir from "./assets/hiteshsir.jpg"
import piyushsir from "./assets/piyushsir.jpeg"

import HiteshSir from "./Pages/HiteshSir" 
import PiyushSir from "./Pages/PiyushSir"

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Wrapper/> }>
                        <Route path = "" element = {<Layout/>}/>
                        <Route path = "hiteshsir" element = { <HiteshSir/> } />
                        <Route path = "piyushsir" element = {<PiyushSir/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


function Wrapper(){
    return (
        <div className="bg-[#1a1a1a] text-white h-[100vh] w-[100vw] flex flex-col font-poppins">
            <div className="h-[10vh] w-[100vw] flex items-center px-[50px] bg-gray-200">
                
                <div className="h-[100%] flex items-center">
                    <img src={icon} alt="" className="h-[90%] rotate-[-15deg]"/>
                    <div className="font-semibold text-3xl text-black">ChaiGPT</div>
                </div>
            </div>
            <div className="h-[90vh]">
                <Outlet/>
            </div>
            
        </div>  
    );
}

function Layout(){
    return (
        <div className="h-[100%] flex justify-center items-center gap-x-[50px]">

            <Link to="/hiteshsir">
                <div className="bg-white flex flex-col h-[200px] w-[350px] rounded-xl">
                    <div className="flex">
                        <img src={hiteshsir} alt="" className="rounded-[50%] w-[100px] h-[100px] border-[4px] border-white relative top-[-25px] left-[-25px]" />
                        <div className="mt-[25px] text-black font-semibold text-xl">Hitesh Choudhary</div>
                    </div>

                    <div className="text-black py-[10px] px-[15px] text-justify self-end text-sm">Your coding mentor with a chill vibe. Let's break down complex tech into fun, practical learning!</div>
                </div>
            </Link>

            <Link to="/piyushsir">
                <div className="bg-white flex flex-col h-[200px] w-[350px] rounded-xl">
                    <div className="flex">
                        <img src={piyushsir} alt="" className="rounded-[50%] w-[100px] h-[100px] border-[4px] border-white relative top-[-25px] left-[-25px]" />
                        <div className="mt-[25px] text-black font-semibold text-xl">Piyush Garg</div>
                    </div>

                    <div className="text-black py-[10px] px-[15px] text-justify self-end text-sm"> I love building full-stack apps and guiding developers step by step. Ask me anything code-related!</div>
                </div>
            </Link>

        </div>
    );
}


