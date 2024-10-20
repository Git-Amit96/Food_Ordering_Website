const Contact = () => {
    return (
        <div >
            <h2 className="font-bold text-xl p-3">Contact Us </h2>
            <div className="flex p-2 gap-4">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="Search" />
                <button className="rounded-md bg-green-400 px-2 border-2 border-black ">Submit</button>

            </div>
        </div>
    )
};
export default Contact;