import { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import heart from '../../images/heart.svg';
import heartFilled from '../../images/heartFilled.svg';
import heartLiked from '../../images/heartLiked.svg';
import './style.css'

interface CatCardProps {
    id: string;
    url: string;
}

export const CatCard:FC<CatCardProps> = ({url, id}) => {
    const liked = useTypedSelector(state => state.cats.favouriteCats[id])
    const {likeCat, delCatFromFavs} = useActions();
    const [heartHover, setHeartHover] = useState<boolean>(false)

    const handleHover = () => {
        if (!heartHover) {
            setHeartHover(true)
        }
    }
    const handleUnHover = () => {
        if (heartHover) {
            setHeartHover(false)
        }
    }

    const handleClick = () => {
        if (liked) {
            delCatFromFavs(id)
        } else {
            likeCat(id, url)
        }
    }

    return (
        <div className="catCard">
            <img src={url} alt="cat" className="catCard-img"/>
            <span className="heart">
                <img className="heart-img" src={
                        liked ? heartLiked :
                            heartHover ? heartFilled : heart
                    } alt="heart" 
                    onClick={handleClick}
                    onMouseOver={handleHover}
                    onMouseOut={handleUnHover}
                />
            </span>
        </div>
    )
}