import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CatCard } from "../../components/CatCard";
import '../style.css';

export const FavouriteCats:FC = () => {
    const fav_cats = useTypedSelector<any>(state => state.favCats.favouriteCats);

    return (
        <div className="container">
            <div className="cats-box">{
                Object.keys(fav_cats).map(id => 
                    <CatCard key={id} id={id} url={fav_cats[id]} />
                )
            }</div>
        </div>
    )
}