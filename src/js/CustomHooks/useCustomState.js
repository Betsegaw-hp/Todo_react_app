import { useState } from "react";

export const useCustomHooks = (inital) => {
    const [value , setValue] = useState(inital)
    return [
        value,
        setValue
    ]
}