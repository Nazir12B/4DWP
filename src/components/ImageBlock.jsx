import { useState } from "react";
const ImageBlock = ({ blason }) => {
    const [isCode, setIsCode] = useState(false);
    return (
        <button className="imageWrapper" onClick={() => {setIsCode(!isCode);}}>
            <img src={blason.coatOfArms.svg} alt={blason.cca3}/>
            <div style={{ fontWeight: "350" }}>
                {isCode ? blason.name.common : blason.cca3}
            </div>
        </button>
    );
};

export default ImageBlock;