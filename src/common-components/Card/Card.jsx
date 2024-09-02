import React from 'react';
import './Card.css';
import star from './star.png';

export default function Card(props) {
    let badgeText;
    if (props.openSpots == 0) {
        badgeText = "SOLD OUT"
    } else if (props.location == "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating} </span>
                <span className="gray"> ({props.item.stats.reviewCount}) • </span>
                <span className="gray"> {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

// export default function Card(props) {
//     return (
//         <div className="card">
//             <img src={props.cardImg} className="card-img" alt="Card" />
//             <div className="card-stats">
//                 <img src={props.starImg} alt="Star" />
//                 <span>{props.rating}</span>
//                 <span>({props.bracketValue}) • </span>
//                 <span>USA</span>
//             </div>
//             <p>{props.description}</p>
//             <p>From ${props.price} / person</p>
//         </div>
//     );
// }