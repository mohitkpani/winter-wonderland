
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";

import "./ExplorePage.css";

function ExplorePage({ title, description }) {
    return (
        <section className="explore-page">

            <span className="explore-page-label">
                WINTER WONDERLAND
            </span>

            <h1>{title}</h1>

            <p>{description}</p>

            <Link to="/" className="explore-back">
                <ArrowLeft size={18} />
                Return to Home
            </Link>

        </section>
    );
}

export default ExplorePage;
