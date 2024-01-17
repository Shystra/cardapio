import "./Card.css";


interface CardPorps {
    price: number,
    title: string,
    image: string, 

}
export function Card ({ price, title, image}: CardPorps) {
    return (
        <div className="card">
            <img/>
            <h2>标题</h2>
            <p><b>Valor:</b></p>
        </div>
    )
}