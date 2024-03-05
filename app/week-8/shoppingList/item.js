export default function Item(props) {
    const onSelect = props.onSelect;
    const listItemOnClick = (name) => {
        name = name.split(',', 1)[0];
        name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        name = name.trim();
        onSelect(name);
    }
    return (
        <li className="w-80 " onClick={() => listItemOnClick(props.name)}>
            <a href="#">
                <div className="  bg-slate-800 w-80 m-7 ml-3 p-3 rounded-md hover:bg-sky-700">
                    <h1 className=" text-xl font-semibold">{props.name}</h1>
                    <p className=" text-xs">Buy {props.quantity} in {props.category}</p>
                </div>
            </a>

        </li>
    );
};