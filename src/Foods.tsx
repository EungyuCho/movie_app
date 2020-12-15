import React from 'react';


type FoodsProps = {
    name: string,
    price?: number
};

function Foods({name, price}: FoodsProps) {
    return (
        <div>
            i like {name}
            {price && <p>price is {price}</p>}
        </div>
    )
}

export default Foods;