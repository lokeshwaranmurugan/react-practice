import Card from "../components/Card/Card";
import { useGetAllBooksQuery } from "../slices/BooksApiSlice";

const BooksPage = () => {

    const { data, isSuccess, isError, isLoading } = useGetAllBooksQuery();
    return (
        <div className="CardHolder"> 
            {
                data && data.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default BooksPage;