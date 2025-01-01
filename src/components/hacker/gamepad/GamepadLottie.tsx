import Lottie from "lottie-react";
import gamepadAnimation from './gamepad.json';
import React, {CSSProperties} from "react";

const STYLE: CSSProperties = {
    width: 60,
    height: 60
}

export function GamepadAnimation() {
    return (
        <div style={STYLE}>
            <Lottie
                autoplay={true}
                animationData={gamepadAnimation}
            />
        </div>
    );
}