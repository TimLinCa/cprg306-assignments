import Item from "./item";

export default function ItemList(props) {
    return (
        <ui class="list-none">
            {
                (props.sortBy === "groupByCategory" && Object.keys(props.items).map(category => (
                    <li key={category}>
                        <h2 class="ml-2">{category}</h2>
                        {
                            props.items[category].map(item => (
                                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}></Item>
                            ))
                        }
                    </li>
                ))
                )
            }
            {
                (props.sortBy !== "groupByCategory" &&
                    props.items.map(item => (
                        <li key={item.id}>
                            <Item name={item.name} quantity={item.quantity} category={item.category}></Item>
                        </li>
                    ))
                )
            }
        </ui>
    );
}