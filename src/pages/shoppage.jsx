import React from "react";
import { CollectionPreview } from "../components/collectionpreview/collectionpreview";
import  SHOP_PAGE  from '../data/shopdata';


class ShopPage extends React.Component
{
    constructor(){
        super();

        this.state = {SHOP_PAGE};
    }


    render()
    {
        const collections = this.state.SHOP_PAGE;
        console.log(collections[0]);
        return(
            <>
            <h1>Collections</h1>
            <div className="shopPage">
                {
                    collections
                    .map(({id, ...collections}) => {
                        return(
                            <CollectionPreview key={id} {...collections}/>
                        );
                    })
                }
            </div></>
        );

    }

}


export default ShopPage;