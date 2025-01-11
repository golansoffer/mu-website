import {useEffect, useRef, useState} from "react";

interface VideoSource {
    src: string;
    type: string;
}


type SequentialVideoPlayerProps = {
    sources: VideoSource[];
    loop?: boolean;
    autoplay?: boolean;
    muted?: boolean;
    className?: string;
}

export function SequentialVideoPlayer({
                                          sources,
                                          loop = true,
                                          autoplay = true,
                                          muted = true,
                                          className
                                      }: SequentialVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

    function handleVideoEnd() {
        setCurrentSourceIndex(function (prevIndex) {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= sources.length) {
                return loop ? 0 : prevIndex;
            }
            return nextIndex;
        });
    }

    useEffect(function () {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load(); // Reload the video when the source changes
            if (autoplay) {
                videoElement.play();
            }
        }
    }, [currentSourceIndex, autoplay]);

    return (
        <video
            ref={videoRef}
            muted={muted}
            autoPlay={autoplay}
            onEnded={handleVideoEnd}
            className={className}
        >
            <source src={sources[currentSourceIndex]?.src} type={sources[currentSourceIndex]?.type}/>
            Your browser does not support the video tag.
        </video>
    );
}
