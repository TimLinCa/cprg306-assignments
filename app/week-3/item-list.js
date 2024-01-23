import Item from "./item";

export default function ItemList() {
    return (
        <main>
        <Item name="milk, 4 L 🥛" quantity="1" category="Dairy"></Item>
        <Item name="bread 🍞" quantity="2" category="Bakery"></Item>
        <Item name="eggs, dozen 🥚" quantity="2" category="Dairy"></Item>
        <Item name="bananas 🍌" quantity="6" category="Produce"></Item>
        <Item name="broccoli 🥦" quantity="3" category="Produce"></Item>
        <Item name="chicken breasts, 1 kg 🍗" quantity="1" category="Meat"></Item>
        <Item name="pasta sauce 🍝" quantity="3" category="Canned Goods"></Item>
        <Item name="spaghetti, 454 g 🍝" quantity="2" category="Dry Goods"></Item>
        <Item name="toilet paper, 12 pack 🧻" quantity="1" category="Household"></Item>
        <Item name="paper towels, 6 pack" quantity="1" category="Household"></Item>
        <Item name="dish soap 🍽️" quantity="1" category="Household"></Item>
        <Item name="hand soap 🧼" quantity="4" category="Household"></Item>
        </main>
      
    );
}
