import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([]);
    const { data: images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setimages );
    // }, [category]);

    return (
        <div>
            <h3 className="animate__animated animate__fadeInLeft">{ category }</h3>
            { loading && <p className="animate__animated animate__flash"> Loading ...</p> }
            <div className="card-grid">
                {
                    images.map( img => (
                       <GifGridItem
                            key={ img.id }
                            { ...img }
                       />
                    ))
                }
            </div>
        </div>
        
    )
}

export default GifGrid
