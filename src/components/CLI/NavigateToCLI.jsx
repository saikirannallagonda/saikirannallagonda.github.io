import { useEffect } from "react";

const NavigateToCLI = () => {
    useEffect(() => {
        window.location.href = `${process.env.PUBLIC_URL}/cli/index.html`;
    }, []);
    return null;
}

export default NavigateToCLI;