import React from 'react'

type ShapeType = "cube" | "square" | "rectangle" | "triangle";

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
    combine: `${ThemeType}-${ColorType}`,  // example for combined type
    Exclude: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow"> // example for exclude
}

let Items: ItemProps = {
    combine: "light-yellow",
    Exclude: "dark-blue"
}

function Shape() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h3>Items.Combine: {Items.combine}</h3>
                <h3>Items.Exclude: {Items.Exclude}</h3>
            </div>
        </>
    )
}

export default Shape