import React from 'react';


interface FoodsInterface {
    fav : string;
    something: boolean;
    others: Array<string>;
}

type FoodsProps<FoodsInterface> = {
    name: string,
    price?: number
};

function Foods({name, price}: FoodsProps<FoodsInterface>) {
    return (
        <div>
            i like {name}
            {price && <p>price is {price}</p>}
        </div>
    )
}

export default Foods;