'use client'

import NextImage from "next/image";

const Mouldings = async ({description, src}:any) => {

    return (
        <div>
            {description}
            <NextImage 
                src={src}
                width={500}
                height={500}
                alt="prodoct images"
            />
        </div>
    )
}

export default Mouldings;