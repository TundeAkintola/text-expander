import "./index.css";
import { useState } from "react";
export default function App() {
    return (
        <div>
            <TextExpander className="box">
                React.js is a popular JavaScript library for building user
                interfaces. Its component-based architecture makes it easy to
                develop reusable UI elements, promoting code organization and
                maintainability. With its virtual DOM, React efficiently updates
                the UI, enhancing performance.
            </TextExpander>

            <TextExpander
                collapsedNumWords={20}
                expandButtonText="Show text"
                collapseButtonText="Collapse text"
                buttonColor="#ff6622"
                className="box"
            >
                One of React's key features is its declarative approach to
                building UIs. Developers describe how the UI should look at any
                given point, and React takes care of updating and rendering the
                components efficiently. This simplifies the development process
                and reduces the risk of bugs.
            </TextExpander>

            <TextExpander expanded={true} className="box">
                React's extensive ecosystem, including tools like Redux for
                state management and React Router for navigation, further
                enhances its capabilities. Its strong community support, vast
                array of third-party libraries, and continual updates ensure
                React remains a top choice for frontend development projects.
            </TextExpander>
        </div>
    );
}

function TextExpander({
    collapsedNumWords = 10,
    expandButtonText = "Show More",
    collapseButtonText = "Show Less",
    buttonColor = "#1f09cd",
    className,
    expanded = false,
    children
}) {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const displayText = isExpanded
        ? children
        : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
    const buttonStyle = {
        background: "none",
        border: "none",
        font: "inherit",
        cursor: "pointer",
        marginLeft: "6px",
        color: buttonColor
    };
    function handleClick(e) {
        setIsExpanded(e => !e);
    }
    return (
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={handleClick} style={buttonStyle}>
                {isExpanded ? collapseButtonText : expandButtonText}
            </button>
        </div>
    );
}
