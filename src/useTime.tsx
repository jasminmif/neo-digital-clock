import { useEffect, useRef, useState } from "react";

export const useTime = (currentDate: Date = new Date()) => {
    const prevDate = useRef(currentDate);
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        const timer = setInterval(() => {
            prevDate.current.setSeconds((prevDate.current.getSeconds() + 1));
            setDate(new Date(prevDate.current));
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}