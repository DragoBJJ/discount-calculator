import React, {memo} from "react";

type HeaderType = {
    title: string
    isLarge?: boolean
    className?: string
}

export const Header = memo<HeaderType>(({title,isLarge,className}) => {

    return (
        <h3 className={className} style={{fontSize:  isLarge ? "18px": ""}}>{title}</h3>
    )
})