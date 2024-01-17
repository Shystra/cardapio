import "./Card.css";


interface CardPorps {
    price: number,
    title: string,
    image: string, 

}
export function Card ({ price, title, image}: CardPorps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}