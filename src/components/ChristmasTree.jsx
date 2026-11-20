
import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import ChristmasIcon from "./ChristmasIcon";
import "./ChristmasTree.css";

const gifts = [
    {
        id: 1,
        title: "A Christmas Wish",
        message: "May your life be filled with happiness, love and magical moments."
    },
    {
        id: 2,
        title: "A Little Magic",
        message: "May every little moment bring you something beautiful."
    },
    {
        id: 3,
        title: "A Special Surprise",
        message: "The greatest gift is sharing wonderful moments with people you love."
    }
];

const santaMessages = [
    "Welcome to my magical Christmas village!",
    "Have you decorated your Christmas tree?",
    "Every ornament holds a little Christmas magic.",
    "May your Christmas be filled with happiness!"
];

const baubles = [
    { id: 1, color: "red", top: "19%", left: "48%" },
    { id: 2, color: "gold", top: "28%", left: "34%" },
    { id: 3, color: "blue", top: "34%", left: "60%" },
    { id: 4, color: "silver", top: "43%", left: "43%" },
    { id: 5, color: "red", top: "50%", left: "66%" },
    { id: 6, color: "gold", top: "58%", left: "30%" },
    { id: 7, color: "blue", top: "65%", left: "53%" },
    { id: 8, color: "silver", top: "73%", left: "39%" },
    { id: 9, color: "red", top: "77%", left: "63%" },
    { id: 10, color: "gold", top: "38%", left: "25%" },
    { id: 11, color: "blue", top: "55%", left: "75%" },
    { id: 12, color: "silver", top: "68%", left: "23%" }
];

function ChristmasTree() {
    const [selectedGift, setSelectedGift] = useState(null);
    const [lightsOn, setLightsOn] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((previous) => (previous + 1) % santaMessages.length);
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="christmas-tree-page">
            <div className="tree-page-heading">
                <span className="tree-eyebrow">THE HEART OF THE VILLAGE</span>
                <h1>The Christmas Tree</h1>
                <p>A little sparkle, a little magic and a lot of Christmas joy.</p>
            </div>

            <div className={`tree-scene ${lightsOn ? "lights-enabled" : ""}`}>
                <div className="tree-glow" />

                {/* Santa */}
                <div className="tree-santa-area">
                    <div className="tree-santa-bubble">
                        <p>{santaMessages[messageIndex]}</p>
                    </div>

                    <img
                        className="tree-santa-image"
                        src="/images/left-santa.webp"
                        alt="Santa Claus"
                    />
                </div>

                {/* Christmas Tree */}
                <div className="tree-center-area">
                    <div className="tree-image-wrapper">
                        <img
                            className="tree-image"
                            src="/images/christmas-tree.webp"
                            alt="Decorated Christmas tree"
                        />

                        {/* Bauble decorations */}
                        <div className="tree-baubles">
                            {baubles.map((bauble) => (
                                <span
                                    key={bauble.id}
                                    className={`tree-bauble bauble-${bauble.color}`}
                                    style={{
                                        top: bauble.top,
                                        left: bauble.left,
                                        "--bauble-delay": `${bauble.id * 0.18}s`
                                    }}
                                >
                                    <span className="bauble-cap" />
                                    <span className="bauble-shine" />
                                </span>
                            ))}
                        </div>

                        {/* Small decorative stars */}
                        <div className="tree-star star-one">✦</div>
                        <div className="tree-star star-two">✧</div>
                        <div className="tree-star star-three">✦</div>
                        <div className="tree-star star-four">✧</div>
                        <div className="tree-star star-five">✦</div>

                        {/* Decorative bells */}
                        <div className="tree-bell bell-one">♧</div>
                        <div className="tree-bell bell-two">♧</div>
                    </div>

                    <div className="tree-base" />

                    {/* Gifts */}
                    <div className="tree-gifts">
                        {gifts.map((gift) => (
                            <button
                                className="tree-gift-button"
                                key={gift.id}
                                onClick={() => setSelectedGift(gift)}
                                aria-label={`Open ${gift.title}`}
                            >
                                <ChristmasIcon name="gift-box" size={58} />
                            </button>
                        ))}
                    </div>

                    <button
                        className="tree-light-button"
                        onClick={() => setLightsOn((previous) => !previous)}
                    >
                        <Sparkles size={17} />
                        {lightsOn ? "Turn Lights Off" : "Turn Lights On"}
                    </button>
                </div>

                {/* Reindeer */}
                <div className="tree-reindeer-area">
                    <img
                        className="tree-reindeer-image"
                        src="/images/reindeer-sleigh.webp"
                        alt="Reindeer pulling Santa's sleigh"
                    />
                </div>

                {/* Ambient sparkles */}
                <div className="tree-sparkle-layer">
                    {Array.from({ length: 28 }, (_, index) => (
                        <span
                            key={index}
                            className="scene-sparkle"
                            style={{
                                left: `${(index * 37) % 100}%`,
                                top: `${(index * 23) % 90}%`,
                                animationDelay: `${(index % 7) * 0.4}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="tree-bottom-message">
                <Sparkles size={20} />
                <p>Every little decoration makes Christmas more magical.</p>
                <Sparkles size={20} />
            </div>

            {/* Gift popup */}
            {selectedGift && (
                <div
                    className="gift-modal-overlay"
                    onClick={() => setSelectedGift(null)}
                >
                    <div
                        className="gift-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="gift-title"
                    >
                        <button
                            className="gift-modal-close"
                            onClick={() => setSelectedGift(null)}
                            aria-label="Close gift"
                        >
                            <X size={21} />
                        </button>

                        <ChristmasIcon name="gift-box" size={76} />
                        <h2 id="gift-title">{selectedGift.title}</h2>
                        <p>{selectedGift.message}</p>

                        <button
                            className="gift-modal-button"
                            onClick={() => setSelectedGift(null)}
                        >
                            Thank You
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ChristmasTree;
