import { MouseEventHandler, FormEventHandler} from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    handleSubmit?: FormEventHandler<HTMLButtonElement>;
}

