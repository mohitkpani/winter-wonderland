
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const messages = [
    "Ho ho ho! Welcome to my magical Christmas village!",
    "I'm so happy to see you! Welcome to the North Pole!",
    "The elves are preparing wonderful gifts for everyone!",
    "Come along! Let me show you the magic of Christmas!",
    "I hope you have a wonderful Christmas adventure!"
];

function HomePage() {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((previous) => (
                previous + 1
            ) % messages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-hero">

            {/* Background overlay */}
            <div className="home-overlay"></div>

            <div className="home-container">

                {/* Left side content */}
                <div className="home-content">

                    <span className="home-eyebrow">
                        WELCOME TO THE NORTH POLE
                    </span>

                    <h1>
                        A Magical
                        <span>Christmas World</span>
                    </h1>

                    <p className="home-description">
                        Step into Santa's magical world. Explore the
                        snowy village, discover the Christmas tree
                        and experience wonderful stories from the
                        North Pole.
                    </p>

                    <div className="home-buttons">

                        <Link
                            to="/village"
                            className="home-primary-button"
                        >
                            Explore the Village
                        </Link>

                        <Link
                            to="/story"
                            className="home-outline-button"
                        >
                            Discover Santa's Story
                        </Link>

                    </div>

                </div>

                {/* Right side Santa */}
                <div className="home-santa-area">

                    {/* Santa speech bubble */}
                    <div className="santa-speech-bubble">

                        <p
                            key={messageIndex}
                            className="santa-message"
                            aria-live="polite"
                        >
                            {messages[messageIndex]}
                        </p>

                    </div>

                    {/* Santa character */}
                    <img
                        className="santa-character"
                        src="/images/santa-character.webp"
                        alt="Santa Claus welcoming visitors"
                        fetchPriority="high"
                        draggable="false"
                    />

                </div>

            </div>

        </section>
    );
}

export default HomePage;
