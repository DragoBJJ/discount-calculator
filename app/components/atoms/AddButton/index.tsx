import {memo} from "react";
import s from "./style.module.scss"
import {IconType} from "react-icons";

type IconButtonType = {
    Icon: IconType,
    iconSize?: string,
    onClick: (T) =>  void
}

export const IconButton = memo<IconButtonType>(({Icon,onClick,iconSize}) => {
    return (
        <div className={s.buttonsWrapper}>
            <Icon size={iconSize ? iconSize : "20px"} className={s.addButton} onClick={onClick}/>
        </div>
    )
})