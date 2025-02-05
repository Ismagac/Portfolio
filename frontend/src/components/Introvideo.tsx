import React from "react";

interface IntrovideoProps {
    onEnded: () => void;
}

function Introvideo({ onEnded }: IntrovideoProps) {
    return (
        <div className="introvideo">
            <video
                src="./videos/intro.mp4"
                autoPlay
                muted
                playsInline
                onEnded={onEnded}
                style={{width: "100%", height: "100%"}}
            />
        </div>
    );
}

export default Introvideo;