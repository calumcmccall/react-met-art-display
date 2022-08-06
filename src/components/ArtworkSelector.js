const ArtworkSelector = ({artworks, onArtworkSelected}) => {

    const handleChange = event => {
        onArtworkSelected(event.target.value);
    }

    return (
        <select defaultValue='' onChange={handleChange} >
            <option value='' disabled>Choose an artwork</option>
            {
                artworks.map(artwork => {
                    return ( 
                        <option key={artwork} value={artwork}>{artwork}</option>
                    )
                })
            }
        </select>
    )

}

export default ArtworkSelector