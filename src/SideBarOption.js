import React from 'react'
import "./SideBarOption.css"

function SideBarOption({title ,Icon}) {
    return (
        <div className="sidebaroption">
             {Icon && <Icon className="sidebaroptionicon"/>}
            {Icon ? <h4> {title} </h4> : <p>{title}</p>}
        </div>
    );
}

export default SideBarOption
