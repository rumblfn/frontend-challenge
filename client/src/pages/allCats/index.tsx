import { FC, useEffect } from "react";
import { CatsState } from "../../types/cats";
import { CatCard } from "../../components/CatCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { nanoid } from "nanoid";
import '../style.css';

const limit = 30;

export const AllCats:FC = () => {
    const {fetchCats} = useActions();
    const {cats, error, loading, page} = useTypedSelector<CatsState>(state => state.cats);

    const handleScroll = (e: any) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= 
            e.target.documentElement.scrollHeight && !loading) 
        {
            fetchCats(page, limit)
        }
    }

    useEffect(() => {
        if (!cats.length) {
            fetchCats(page, limit)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="container">
            <div className="cats-box">{
                cats.map(item => <CatCard key={`${item.id}-${nanoid(8)}`} id={item.id} url={item.url} />)
            }</div>
        </div>
    )
}