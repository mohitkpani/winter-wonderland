
import "./Snowfall.css";

const snowflakes = Array.from({ length: 65 }, (_, i) => ({
    id: i,
    left: (i * 37) % 100,
    duration: 4 + (i % 6),
    delay: -((i * 13) % 15),
    size: 10 + (i % 5) * 3,
    opacity: 0.4 + (i % 6) * 0.1
}));

function Snowfall() {
    return (
        <div className="snowfall" aria-hidden="true">

            {snowflakes.map((snow) => (
                <span
                    key={snow.id}
                    className="snowflake"
                    style={{
                        left: `${snow.left}%`,
                        animationDuration: `${snow.duration}s`,
                        animationDelay: `${snow.delay}s`,
                        fontSize: `${snow.size}px`,
                        opacity: snow.opacity
                    }}
                />
            ))}

        </div>
    );
}

export default Snowfall;
