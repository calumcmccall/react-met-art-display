import { useEffect, useState } from "react"
import ArtworkList from "../components/ArtworkList"
import Artwork from "../components/Artwork"
import ArtworkSelector from "../components/ArtworkSelector"

const ArtworksContainer = () => {

    const [artworks, setArtworks] = useState([])
    const [selectedArtwork, setSelectedArtwork] = useState('')
    const [selectedData, setSelectedData] = useState('')
    

    useEffect(() => {
        getArtwork()
    }, [])

    useEffect(() => {
        if (selectedArtwork) {
            getSelectedArtwork(selectedArtwork)
        }
    }, [selectedArtwork])

    const getArtwork = () => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=hasImages&departmentId=6')
            .then(res => res.json())
            .then(artworkData => setArtworks(artworkData.objectIDs))
    }

    const getSelectedArtwork = () => {
        let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
        let test = selectedArtwork
        console.log(url.concat(test));
        fetch(url.concat(test))
            .then(res => res.json())
            .then(selectedArt => setSelectedData(selectedArt))
    }

    const aTest = () => {
        console.log(artworks);
    }

    const handleArtworkSelected = artwork => {
        setSelectedArtwork(artwork)
    }

    return (
        <>
            <button onClick={aTest}>Test</button>
            {/* <img src="https://images.metmuseum.org/CRDImages/ep/web-large/DT285189.jpg"/> */}
            <ArtworkSelector artworks={artworks} onArtworkSelected={handleArtworkSelected} />
            <Artwork artwork={selectedArtwork} selectedData={selectedData} />
            <p>{selectedData.artistDisplayName}</p>
            <img src={selectedData.primaryImageSmall}/>
        </>
    )
}

export default ArtworksContainer;