import { BooksApiResponse } from "../../types/BookType"

const Card = ({item} : { item: BooksApiResponse}) => {
  return (
    <div>
        {item.title}
    </div>
  )
}



export default Card;