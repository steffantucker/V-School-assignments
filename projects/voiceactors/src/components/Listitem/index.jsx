import React from "react";
import { Thumbnail } from "react-bootstrap";

const Listitem = props => {
  return (
		<Thumbnail onClick={props.click?props.click:null} src={props.image}>
				<h5>{props.name}</h5>
				{props.description?<p className="card-text">{props.description}</p>:null}
		</Thumbnail>
  );
};

export default Listitem;
