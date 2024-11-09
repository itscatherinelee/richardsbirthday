import { useDvdScreensaver } from "react-dvd-screensaver";
import dvdRichardPng from "../assets/dvd-richard.png";
import { useEffect, useState } from "react";

export interface DvdRichardProps {
    /** size of the image that will be bouncing around */
    size?: number;
    /** colors to cycle through to tint the image with */
    colors?: string[];
}

export function DvdRichard({ 
    size = 300,
    colors = [
        "#e81416",
        "#ffa500",
        "#faeb36",
        "#79c314",
        "#487de7",
        "#4b369d",
        "#70369d",
    ]
}: DvdRichardProps) {
    const { containerRef, elementRef, impactCount } = useDvdScreensaver({
        speed: 5,
    });
    const [colorIndex, setColorIndex] = useState(0);

    // Grabs a new color on each impact
    useEffect(() => {
        let newColorIndex = Math.floor(Math.random() * colors.length);
        
        // Getting new color if the new calculated index is already picked
        if (colorIndex === newColorIndex) {
            newColorIndex = newColorIndex - 1;
            if (newColorIndex < 0) {
                newColorIndex = colors.length - 1;
            }
        }
        setColorIndex(newColorIndex);
    }, [impactCount])

    return (
        <div
            ref={containerRef}
            style={{
                width: window.innerWidth,
                height: window.innerHeight,
            }}
        >
            <div ref={elementRef} style={{ width: size, height: size, backgroundColor: colors[colorIndex] }}>
                <img src={dvdRichardPng} style={{ width: size, height: size, mixBlendMode: "multiply" }}/>
            </div>
        </div>
    );
}