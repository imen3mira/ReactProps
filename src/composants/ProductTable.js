import React from 'react'

function ProductTable({categorie,prix,name}) {
    return (
        <div className="produits">
            <h1>name :{name}</h1>
            <h1>prix :{prix}</h1>
            <h1>categorie : {categorie}</h1>
        </div>
    )
}

export default ProductTable
