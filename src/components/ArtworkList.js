import Artwork from "./Artwork"

const ArtworkList = ({artworks}) => {

    const artworkItems = artworks.map((artwork) => {
        return (
            <Artwork artwork={artwork} key={artwork}/>
        )
    })

    return (
        <>
            <select>
                {artworkItems}
            </select>
        </>
    )
}

export default ArtworkList;