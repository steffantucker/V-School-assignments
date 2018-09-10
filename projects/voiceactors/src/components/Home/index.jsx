import React from "react";
import { clearTimers } from "../../redux";

const Home = () => {
	clearTimers();
  return <div>
		<h1>Voice Actor Finder</h1>
		<p>Search for an anime or character, click on a character and it will show you all the characters the voice actor/actress have also done in every available language.</p>
	</div>;
};

export default Home;