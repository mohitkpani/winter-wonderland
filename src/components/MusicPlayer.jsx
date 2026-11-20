
import { useEffect, useRef } from "react";

function MusicPlayer() {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.volume = 0.5;

        let isPlaying = false;

        const startMusic = () => {
            if (isPlaying || !audio.paused) return;

            // Call play directly during the user's interaction.
            const playPromise = audio.play();

            if (playPromise) {
                playPromise
                    .then(() => {
                        isPlaying = true;

                        document.removeEventListener(
                            "pointerdown",
                            startMusic,
                            true
                        );

                        document.removeEventListener(
                            "keydown",
                            startMusic,
                            true
                        );

                        console.log("Magical Fantasy is playing.");
                    })
                    .catch((error) => {
                        console.warn(
                            "Music playback could not start:",
                            error.message
                        );
                    });
            }
        };

        // Wait for the visitor's first interaction.
        document.addEventListener(
            "pointerdown",
            startMusic,
            true
        );

        document.addEventListener(
            "keydown",
            startMusic,
            true
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                startMusic,
                true
            );

            document.removeEventListener(
                "keydown",
                startMusic,
                true
            );

            audio.pause();
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            src="/music/magical-fantasy.mp3"
            loop
            preload="auto"
        />
    );
}

export default MusicPlayer;
