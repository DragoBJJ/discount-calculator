import React, {memo} from "react";

type HeaderType = {
    title: string
    size?: string
    className?: string
}

export const Header = memo<HeaderType>(({title,size,className}) => {

    return (
        <h3 className={className} style={{fontSize:  size ? size: "16px"}}>{title}</h3>
    )
})