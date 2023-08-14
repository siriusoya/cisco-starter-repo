function DataCard(props) {
  const { IPv4, IPv6 } = props;

  return (
    <>
      {IPv4 && <div className="dataContainer">
        <h3 className="dataTitle">Your public IPv4 address is:</h3>
        <hr className="dataUL" />
         <h2 className="data">{IPv4}</h2>
      </div> }
      {IPv6 && <div className="dataContainer">
        <h3 className="dataTitle">Your public IPv6 address is:</h3>
        <hr className="dataUL" />
         <h2 className="data">{IPv6}</h2>
      </div> }
    </>
  );
}

export default DataCard;
