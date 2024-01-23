import ItemList from "./item-list";
export default function Page() {
    return (
        <main>
          <h1 className="text-4xl m-2 font-bold">Shopping List</h1>
          <ItemList></ItemList>
        </main>
    );
}