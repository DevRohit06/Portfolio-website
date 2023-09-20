import { atom } from "nanostores";

export const isOpen = atom(false);
export function goBack(){
    history.back();
}

