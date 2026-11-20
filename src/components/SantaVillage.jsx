
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

import "./SantaVillage.css";

const locations = [
    {
        id: "home",
        name: "Santa's House",
        subtitle: "A warm home in the snowy North Pole",
        description:
            "Welcome to Santa's cozy home. Inside, Santa reads letters, enjoys warm evenings by the fireplace and prepares for his Christmas journey."
    },
    {
        id: "workshop",
        name: "Toy Workshop",
        subtitle: "Where Christmas presents are made",
        description:
            "Discover the magical workshop where Santa and his elves build toys, prepare surprises and wrap presents for Christmas night."
    },
    {
        id: "market",
        name: "Christmas Market",
        subtitle: "A festive winter marketplace",
        description:
            "Explore charming stalls, handmade decorations, gingerbread treats and warm hot chocolate in the heart of the village."
    },
    {
        id: "stable",
        name: "Reindeer Stable",
        subtitle: "Home of Santa's reindeer",
        description:
            "Visit the reindeer stable and meet the wonderful animals who help Santa travel across the world on Christmas Eve."
    }
];

function SantaVillage() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const closeModal = () => {
        setSelectedLocation(null);
    };

    return (
        <section className="village-page">

            {/* Village Heading */}
            <header className="village-heading">
                <span className="village-eyebrow">
                    THE NORTH POLE
                </span>

                <h1>
                    Welcome to <span>Santa's Village</span>
                </h1>

                <p>
                    Beyond the snowy mountains lies a little village
                    filled with warmth, wonder and Christmas magic.
                </p>
            </header>

            {/* Main Village Image */}
            <div className="village-world">

                <img
                    className="village-background"
                    src="/images/santa-village.webp"
                    alt="A magical snow-covered North Pole village with Santa's House, Toy Workshop, Christmas Market and Reindeer Stable"
                />

                {/* Snowman Character */}
                <img
                    className="village-snowman"
                    src="/images/snowman-character.webp"
                    alt="A festive snowman decorated with Christmas lights, chocolates and gifts"
                    draggable="false"
                />

                {/* Interactive Building Areas */}
                {locations.map((location) => (
                    <button
                        key={location.id}
                        type="button"
                        className={`village-hotspot hotspot-${location.id}`}
                        onClick={() => setSelectedLocation(location)}
                        aria-label={`Explore ${location.name}`}
                        title={location.name}
                    />
                ))}

            </div>

            {/* Village Locations */}
            <div className="village-discover">

                <div className="village-discover-heading">
                    <span>DISCOVER THE MAGIC</span>

                    <h2>Explore the Village</h2>

                    <p>
                        Every corner of the North Pole has a story to tell.
                    </p>
                </div>

                <div className="village-location-grid">

                    {locations.map((location) => (
                        <button
                            key={location.id}
                            type="button"
                            className="village-location-card"
                            onClick={() => setSelectedLocation(location)}
                        >
                            <span className="location-information">
                                <strong>{location.name}</strong>
                                <small>{location.subtitle}</small>
                            </span>

                            <ArrowUpRight
                                className="location-arrow"
                                size={21}
                            />
                        </button>
                    ))}

                </div>
            </div>

            {/* Location Details Modal */}
            {selectedLocation && (
                <div
                    className="village-dialog-backdrop"
                    onClick={closeModal}
                >
                    <div
                        className="village-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="village-dialog-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="village-dialog-close"
                            onClick={closeModal}
                            aria-label="Close details"
                        >
                            <X size={22} />
                        </button>

                        <span className="dialog-eyebrow">
                            A NORTH POLE DESTINATION
                        </span>

                        <h2 id="village-dialog-title">
                            {selectedLocation.name}
                        </h2>

                        <p>
                            {selectedLocation.description}
                        </p>

                        <button
                            className="village-dialog-button"
                            onClick={closeModal}
                        >
                            Return to Village
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}

export default SantaVillage;
