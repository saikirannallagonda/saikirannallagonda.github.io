import { useEffect } from "react";

const NavigateToAIGC = () => {
    useEffect(() => {
        window.location.href = `${process.env.PUBLIC_URL}/aigc/index.html`;
    }, []);
    return null;
}

export default NavigateToAIGC;