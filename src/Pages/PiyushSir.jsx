import { useState } from "react";
import generate from "../assets/generate.png"
import { getPiyushSirChat } from "../backend/piyushsirchat.js";

function PiyushSir() {
    const [input, setInput] = useState("");
    const [mes, setMes] = useState([]);

    async function PResponse() {
        if (!input.trim()) return;

        const res = await getPiyushSirChat(input);
        setMes([...mes, {user: input, model: res}]);
        setInput("");
    }

    return (
        <div className="h-[90vh] bg-gray-800 flex flex-col gap-y-[10px] pb-[10px]">
            {/* Que - Ans */}
            <div className="h-[85%] px-[250px] flex flex-col gap-y-[20px] my-[10px] overflow-y-auto">
                {mes.map((m, idx) => (
                    <div key={idx} className="flex flex-col gap-y-[20px] leading-[1.75]">
                        <div className="max-w-[60%] self-end bg-gray-100/10 px-[21px] py-[7px] rounded-[25px]">{m.user}</div>
                        <div className="max-w-[60%] px-[14px] py-[7px] rounded-[25px]">{m.model}</div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="h-[15%] px-[250px] flex gap-x-[10px]">

                <div className="h-[100%] w-[100%] flex justify-between items-center bg-white/10 px-[50px] rounded-2xl overflow-hidden">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="text-lg border-none outline-none w-[85%] border-white bg-transparent text-white" placeholder="Ask Piyush Garg" />
                    <button onClick={PResponse}>
                        <img src={generate} alt="" className="h-[35px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PiyushSir;