'use client'
import { CustomButtonProps } from "@/types";

const CustomButton = ({title, containerStyles, handleClick, btnType, handleSubmit, icon}: CustomButtonProps) => {

    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn flex items-center gap-3 justify-center ${containerStyles}`}
            onClick={handleClick}
            onSubmit={handleSubmit}
        >
            {icon && <span className="flex items-center w-7 h-7 p-1 border-2 border-white dark:border-gray-500 rounded-full justify-center">
                {icon}
            </span>}
            <span className={`flex-1`}>{title}</span>
        </button>
    );
}

export default CustomButton;