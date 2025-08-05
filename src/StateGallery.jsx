import { useParams } from "react-router-dom";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { DataItems } from "./details";


function toPascalCase(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export const  StateGallery=()=> {
  const { state } = useParams();
  if (!state) {
    return <p className="text-red-500 mt-10 text-center">No state provided in URL</p>;
  }

  const stateKey = toPascalCase(state);
  const cityData = DataItems[stateKey];

  if (!cityData) {
    return <p className="text-center mt-10 text-red-500">No data found for "{stateKey}"</p>;
  }

  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '1rem',  backgroundColor:"#FFFFF0" }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {stateKey} Cities
      </h2>
      <ImageList
        sx={{ width: '100%', margin: 0 }}
        cols={4}
        gap={25}
      >
        {cityData.map((cityObj, index) => (
          <ImageListItem key={index} style={{border:"2px solid black"}} >
            <img  
              srcSet={`${cityObj.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${cityObj.img}?w=248&fit=crop&auto=format`}
              alt={cityObj.city}
              loading="lazy"
            />
            <ImageListItemBar
              title={cityObj.city}
              subtitle={<span style={{ fontSize: "24px" }}>{cityObj.title}</span>}
              position="below" 
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
