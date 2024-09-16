import Card from "../components/Card";
import { useGetAllBooksQuery } from "../slices/BooksApiSlice";

const BooksPage = () => {

    const { data, isSuccess, isError, isLoading } = useGetAllBooksQuery();
    return (
        <>
            <div> This is Books Page </div>
            <ul>
                {
                    data && data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </ul>
        </>
    )
}

export default BooksPage;