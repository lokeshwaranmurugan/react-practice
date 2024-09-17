import { BooksApiResponse } from "../../types/BookType"
import "./Card.css"

const Card = ({item} : { item: BooksApiResponse}) => {
  return (
    <div className="DisplayCard">
      <img src={item.cover_image} className="CardImg" />
      <h2> {item.title} </h2>
      <h4> {item.author} </h4>
    </div>
  )
}



export default Card;