import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { TbCopyCheck } from "react-icons/tb";

export default function Token({address="0X10XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token rounded border border-black position-relative z-1 d-flex align-items-center">
            <p className="d-flex align-items-center g-2"><span>CA:</span> {token}</p>
            <button onClick={() => copyHandle()} className="bg-transparent p-0 border-0">  
                {copied ? <TbCopyCheck /> : <FiCopy />} 
            </button>
        </div>
    )
}
