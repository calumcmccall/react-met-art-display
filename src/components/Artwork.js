import ArtworkList from "./ArtworkList"

const Artwork = ({artwork}, {selectedData}) => {

    if (!artwork || !selectedData) {
        return null
    }

    return (
        <>
            <p>{artwork}</p>
            <p>{selectedData}</p>
            {/* {console.log(selectedData)} */}
        </>
    )

}

export default Artwork;