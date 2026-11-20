
import { useState } from "react";
import { Send, Gift, Check, Heart } from "lucide-react";

import "./WishPage.css";

function WishPage() {
    const [name, setName] = useState("");
    const [wish, setWish] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim() || !wish.trim()) return;

        setSent(true);
    };

    const writeAnotherWish = () => {
        setName("");
        setWish("");
        setSent(false);
    };

    return (
        <section className="wish-page">

            <div className="wish-page-content">

                {/* Page Heading */}
                <header className="wish-heading">

                    <span className="wish-eyebrow">
                        THE NORTH POLE POST OFFICE
                    </span>

                    <h1>
                        Make a Wish to <span>Santa</span>
                    </h1>

                    <p>
                        Every wish begins with a little hope.
                        Write yours and send it to the North Pole.
                    </p>

                </header>

                {!sent ? (

                    /* Ancient Parchment Wish Letter */
                    <form
                        className="wish-letter"
                        onSubmit={handleSubmit}
                    >



                        {/* Letter Header */}
                        <div className="letter-top">

                            <span>NORTH POLE POST OFFICE</span>

                            <span>EST. 1892</span>

                        </div>

                        {/* Letter Greeting */}
                        <div className="letter-title">

                            <h2>Dear Santa,</h2>

                            <p>
                                A little wish from my heart...
                            </p>

                        </div>

                        {/* Visitor Name */}
                        <div className="wish-field">

                            <label htmlFor="wish-name">
                                Your Name
                            </label>

                            <input
                                id="wish-name"
                                type="text"
                                placeholder="Write your name..."
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                maxLength={60}
                                required
                            />

                        </div>

                        {/* Christmas Wish */}
                        <div className="wish-field">

                            <label htmlFor="wish-message">
                                My Christmas Wish
                            </label>

                            <textarea
                                id="wish-message"
                                placeholder="Dear Santa, this Christmas I wish..."
                                value={wish}
                                onChange={(event) =>
                                    setWish(event.target.value)
                                }
                                maxLength={1000}
                                rows={6}
                                required
                            />

                        </div>

                        {/* Letter Signature */}
                        <p className="letter-signature">
                            With love and Christmas magic
                        </p>

                        {/* Red Wax Seal */}
                        <div className="letter-seal">
                            <Gift size={25} />
                        </div>

                        {/* Send Wish */}
                        <button
                            type="submit"
                            className="wish-submit-button"
                        >
                            <Send size={19} />
                            Send My Wish to Santa
                        </button>

                    </form>

                ) : (

                    /* Wish Confirmation */
                    <div className="wish-success">

                        <div className="success-icon">
                            <Check size={38} />
                        </div>

                        <span className="wish-eyebrow">
                            NORTH POLE POST OFFICE
                        </span>

                        <h2>Your wish is ready!</h2>

                        <p>
                            Dear {name}, your Christmas wish has been
                            sealed with love and Christmas magic.
                        </p>

                        <div className="success-message">
                            <Heart size={19} />

                            May your Christmas be filled with happiness.
                        </div>

                        <button
                            type="button"
                            className="wish-submit-button"
                            onClick={writeAnotherWish}
                        >
                            Write Another Wish
                        </button>

                    </div>

                )}

                {/* Page Footer */}
                <p className="wish-footer">
                    Made with love at the North Pole
                </p>

            </div>

        </section>
    );
}

export default WishPage;
