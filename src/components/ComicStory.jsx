
import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    BookOpen
} from "lucide-react";

import "./ComicStory.css";

const comicPages = [
    {
        number: 1,
        title: "A Magical Place Called the North Pole",
        image: "/images/chapter-1.webp",
        alt: "Santa discovers the magical North Pole village."
    },
    {
        number: 2,
        title: "The Great Gift Preparation",
        image: "/images/chapter-2.webp",
        alt: "Santa and his elves prepare Christmas presents."
    },
    {
        number: 3,
        title: "The Journey Begins",
        image: "/images/chapter-3.webp",
        alt: "Santa begins his journey in his flying sleigh."
    },
    {
        number: 4,
        title: "A Night of Giving",
        image: "/images/chapter-4.webp",
        alt: "Santa delivers presents around the world."
    }
];

function ComicStory() {
    const [currentPage, setCurrentPage] = useState(0);

    const page = comicPages[currentPage];

    const goToPreviousPage = () => {
        setCurrentPage((current) => Math.max(0, current - 1));
    };

    const goToNextPage = () => {
        setCurrentPage((current) =>
            Math.min(comicPages.length - 1, current + 1)
        );
    };

    return (
        <section className="comic-section">

            {/* Comic Heading */}
            <div className="comic-heading">
                <span className="comic-eyebrow">
                    THE NORTH POLE STORYBOOK
                </span>

                <h1>
                    The Story of <span>Santa Claus</span>
                </h1>

                <p>
                    Discover the magical adventure of Santa,
                    from his home in the North Pole to Christmas night.
                </p>
            </div>

            {/* Comic Reader */}
            <div className="comic-reader">

                {/* Reader Header */}
                <div className="comic-reader-header">
                    <div className="comic-book-label">
                        <BookOpen size={19} />
                        <span>SANTA'S STORY</span>
                    </div>

                    <span className="comic-page-count">
                        PAGE {currentPage + 1} OF {comicPages.length}
                    </span>
                </div>

                {/* Comic Page Image */}
                <div className="comic-page" key={page.number}>
                    <img
                        src={page.image}
                        alt={page.alt}
                        className="comic-page-image"
                        loading="eager"
                    />
                </div>

                {/* Chapter Title */}
                <div className="comic-page-title">
                    <span>CHAPTER {page.number}</span>
                    <h2>{page.title}</h2>
                </div>

                {/* Reading Progress */}
                <div className="comic-progress-track">
                    <div
                        className="comic-progress-fill"
                        style={{
                            width: `${((currentPage + 1) / comicPages.length) * 100
                                }%`
                        }}
                    />
                </div>

                {/* Navigation Controls */}
                <div className="comic-controls">

                    <button
                        className="comic-button"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft size={20} />
                        Previous
                    </button>

                    {/* Page Indicators */}
                    <div className="comic-page-dots">
                        {comicPages.map((item, index) => (
                            <button
                                key={item.number}
                                className={`comic-dot ${currentPage === index ? "active" : ""
                                    }`}
                                onClick={() => setCurrentPage(index)}
                                aria-label={`Open page ${item.number}`}
                                aria-current={
                                    currentPage === index ? "page" : undefined
                                }
                            />
                        ))}
                    </div>

                    <button
                        className="comic-button comic-next-button"
                        onClick={goToNextPage}
                        disabled={currentPage === comicPages.length - 1}
                    >
                        Next
                        <ChevronRight size={20} />
                    </button>

                </div>

                {/* Ending Message */}
                {currentPage === comicPages.length - 1 && (
                    <p className="comic-ending">
                        The End — The magic of Christmas lives in the joy we share.
                    </p>
                )}

            </div>
        </section>
    );
}

export default ComicStory;
