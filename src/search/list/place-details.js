

const PlaceDetails = ({place}) =>{
  return (

      <div className="card" style={{height:350 }}>
        <img src={place.photo ? place.photo.images.large.url : 'data:image/jpeg;base64,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'} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{place.name}</h5>
          <p className="card-text">{place.description}</p>
        </div>
      </div>
  )

}

export default PlaceDetails;