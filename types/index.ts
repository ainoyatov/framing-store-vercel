import { MouseEventHandler, FormEventHandler} from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    handleSubmit?: FormEventHandler<HTMLButtonElement>;
}

// export interface CalendlyButtonProps {
//     url: string;
//     text: string;
//     rootElement: HTMLElement;
// }

export type Posts = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

export type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}