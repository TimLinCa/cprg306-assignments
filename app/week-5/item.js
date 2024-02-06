export default function Item(props) {
    return (
        <div className=" bg-slate-800 w-80 m-5 ml-3 rounded-md">
            <div className="m-2">
                <h1 className=" text-xl font-semibold">{props.name}</h1>
                <p className=" text-xs">Buy {props.quantity} in {props.category}</p>
            </div>
        </div>
    );
};