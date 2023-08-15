function DataCard(props) {
  const { name, ipAddress } = props;

  return (
    <>
      <div className="dataContainer">
        <h3 className="dataTitle">Your public {name} address is:</h3>
        <hr className="dataUL" />
         <h2 className="data">{ipAddress}</h2>
      </div> 
    </>
  );
}

export default DataCard;
