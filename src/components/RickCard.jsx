function RickCard({ rick }) {  
  return (
    <>
      <div className="card">
        <h2>Rick and Morty</h2>
        <p>{rick.character?.name}</p>
        <img src={rick.character?.image} />
      </div>
    </>
  );
}

export default RickCard;
