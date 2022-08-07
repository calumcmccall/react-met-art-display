const Artwork = ({artwork}, {selectedData}) => {

    if (!artwork) {
        console.log("no artwork");
        return null
    } else {
        console.log("artwork");
        // console.log(selectedData);
        return (
            <>
                <p>{artwork}</p>
                <p>{selectedData}</p>
                {/* <p>{selectedData.}</p> */}
                {/* {console.log(selectedData)} */}
                {/* <p>{selectedData.artistDisplayName}</p> */}
                {/* <p>{selectedData.title}</p> */}
                {/* <p>{selectedData.period}</p> */}
                {/* <img src={selectedData.primaryImageSmall}/> */}
            </>
        )

    }

}

export default Artwork;