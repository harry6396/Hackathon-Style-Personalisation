import React, { useEffect } from 'react';
import { useParams } from 'react-router';

/*import data*/
import data from '../data/data.json';

export default function ProductDetails(props) {
  
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, []);

    return (
        <div>
            {"Myntra Product Details"}
        </div>
  );
}
