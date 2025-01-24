// Component to deal with the browser
import * as React from "react"
import useMediaQuery from "../../hook/use-media-query"

const MediaRendering = ({
    minWidth, maxWidth, children
}) => {

    const minDeviceSize = useMediaQuery(`(min-width: ${minWidth}px)`)
    const maxDeviceSize = useMediaQuery(`(max-width: ${maxWidth}px)`)

    return (
        <>{(maxDeviceSize || minDeviceSize) && children}</>
    )
}

export default MediaRendering