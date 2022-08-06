import ArtworkList from "./ArtworkList"

const Artwork = ({artwork}, {selectedData}) => {

    if (!artwork) {
        return null
    }

    return (
        <>
            <p>{artwork}</p>
            {/* <img src={selectedData.primaryImage} /> */}
        </>
    )

}

export default Artwork;