import {  useParams } from "react-router-dom";

export default function BasePhotos () {
    const {id} = useParams();
  return (
    <>
        <h1 style={{color: "white", display: "flex", justifyContent: "center"}}>Other App { id }</h1>
    </>
  );
}
