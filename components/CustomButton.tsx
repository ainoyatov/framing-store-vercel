'use client'
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title, containerStyles, handleClick, btnType, handleSubmit}: CustomButtonProps) => {

    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            onSubmit={handleSubmit}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    );
}

export default CustomButton;