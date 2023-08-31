import React from "react"
import { Rating } from "react-simple-star-rating"

function MovieCard({el}) {
    return (
<div className="card" style={{width: '18rem'}}>
<img src={el.posterUrl} className="card-img-top" alt="..." />
<div className="card-body">
    <h2 className="card-title">{el.title}</h2>
<p className="card-text">{el.description}</p>
<Rating iconsCount={5} readonly={true} initialValue={el.rating}/>
</div>
</div>

)
}
export default MovieCard

