import { MouseEventHandler, FormEventHandler, ReactNode} from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    title: string;
    icon?: ReactNode;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    handleSubmit?: FormEventHandler<HTMLButtonElement>;
}

