import React from "react";
import { CollectionItem } from "../collectionitem/collectionitem";
import './collection-preview.styles.scss';

export const CollectionPreview = ({title, items}) =>
{
    return(
        <>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="collection-preview">
            {
                items.filter((item)=>item.id <= 4)
                .map(({id,...item})=>{
                    return (
                        <CollectionItem key={id} {...item}/>
                    );
                })
            }
        </div></>
    );
}