import {useEffect, useRef, useState} from "react";

export function TypingEffect(textInput, duration) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if (currentPositionRef.current > textInput.length) {
                clearInterval(intervalId);
            }
        }, duration);

        return () => {
            clearInterval(intervalId);
        }
    }, [duration, textInput]);

    return textInput.substring(0, currentPosition)
}