import { CategoryList } from "./CategoryList"
import { useState } from "react"

export const MenuDescription = ({ data }) => {

    const [isVisible, setIsVisible] = useState(false);

    const checkOpen=()=>{
        setIsVisible(!isVisible);
    }
    return (
        <div className="mt-5">
            <div className="p-4 w-[60%] max-w-[700px] m-auto flex justify-between bg-slate-200 shadow-md" onClick={checkOpen} >
                <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                {/* {console.log(data)} */}
                <span>⬇️</span>
            </div>
            <div className="m-auto w-[60%] max-w-[700px]">
                { isVisible && <CategoryList list={data} />}
            </div>
        </div>
    )
}