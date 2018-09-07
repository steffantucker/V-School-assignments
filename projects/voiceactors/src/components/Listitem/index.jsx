import React from "react";
import { Thumbnail } from "react-bootstrap";

const Listitem = props => {
  return (
		<Thumbnail onClick={props.click?props.click:null} src={props.image}>
				<h5>{props.name}</h5>
				{props.description?<p className="card-text">{props.description}</p>:null}
		</Thumbnail>
    // <Media onClick={props.click?props.click:null}>
    //   <Media.Left>
    //     <img
    //       height={64}
    //       src={props.image}
    //       alt={`${props.name}'s picture`}
    //     />
    //   </Media.Left>
    //   <Media.Body>
    //     <Media.Heading>{props.name}</Media.Heading>
    //   </Media.Body>
    // </Media>
  );
};

export default Listitem;
