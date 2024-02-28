export default function Item(props) {
    return (
        <li className="w-80">
            <div className=" bg-slate-800 w-80 p-3 m-7 ml-3 rounded-md">
                <h1 className=" text-xl font-semibold">{props.name}</h1>
                <p className=" text-xs">Buy {props.quantity} in {props.category}</p>
            </div>
        </li>
    );
};