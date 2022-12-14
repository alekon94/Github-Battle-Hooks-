import React from 'react'

export default function useHover () {
    const [hovering, setHovering] = React.useState(hovering);
    const onMouseOver = () => setHovering(true)
    const onMouseOut = () => setHovering(false)
   
    return [hovering, {
        onMouseOver, onMouseOut
    }]

}