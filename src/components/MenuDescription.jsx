import { CategoryList } from "./CategoryList"


export const MenuDescription = ({ data, showCards, setCardsVisibilty }) => {
    const handleClick =()=>{
        if(showCards!=true){

            setCardsVisibilty(true);
        }
        else{
            setCardsVisibilty(false);
        }
    }

    return (
        <div className="mt-5">
            <div className="p-4 w-[60%] max-w-[700px] m-auto flex justify-between bg-slate-200 shadow-md cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                {/* {console.log(data)} */}
                <span>{!showCards? <p>🔽</p>: <p>🔼</p>}</span>
            </div>
            <div className="m-auto w-[60%] max-w-[700px]">
                {showCards && <CategoryList list={data.itemCards} />}
            </div>
        </div>
    )
}