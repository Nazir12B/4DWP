import ImageBlock from "./ImageBlock";
import useGetImages from "../hooks/useGetImages";
import { Link } from "react-router-dom"
const Blason = ({searchValue}) => {
 const [status, blasons] = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {status!== "loaded" && <div>Chargement....</div>}
      {status === "loaded" && blasons.map((blason) => (
         blason.coatOfArms.svg ? (
          <Link to={`/infos/${blason.name.common}`}>
            <ImageBlock key={blason.name.common} blason={blason} />
          </Link>
          ) : null 
         
      ))}
    </div>
  );
};
export default Blason;