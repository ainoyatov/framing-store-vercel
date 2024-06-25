
import NextImage from "next/image";

export default function DisplayMouldings ({itemNum}:any) {


    return (
        
        <div className="relative h-[300px]">
            <NextImage 
                src={`https://s3.amazonaws.com/im-dropbox-sync/${itemNum}.jpg`}
                alt="Images of frame moulding"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                objectFit: 'cover', // cover, contain, none
                }}
            />
        </div>
        
    )
}