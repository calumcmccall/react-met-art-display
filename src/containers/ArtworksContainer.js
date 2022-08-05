import { useEffect, useState } from "react"

const ArtworksContainer = () => {

    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        getArtwork()
    }, [])

    const getArtwork = () => {
        fetch('https://api.artic.edu/api/v1/artworks')
            .then(res => res.json())
            .then(artworkData => setArtworks(artworkData))
    }

    const aTest = () => {
        console.log(artworks);
    }

    return (
        <>
            <button onClick={aTest}>Test</button>
        </>
    )
}

export default ArtworksContainer;