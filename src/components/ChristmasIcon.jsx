
import "./ChristmasIcon.css";

function ChristmasIcon({
    name,
    alt,
    size = 64,
    floating = false,
    glow = false,
    className = ""
}) {
    return (
        <span
            className={`christmas-icon ${floating ? "icon-floating" : ""} ${glow ? "icon-glow" : ""
                } ${className}`}
            style={{
                "--icon-size": `${size}px`
            }}
        >
            <img
                src={`/icons/${name}.svg`}
                alt={alt || name.replaceAll("-", " ")}
                width={size}
                height={size}
                loading="lazy"
                draggable="false"
            />
        </span>
    );
}

export default ChristmasIcon;
