import React from 'react';

import AWSBadge from '../components/badges/AWS';

const IndexPage = () => (
  <div>
	  <header>
	  	<span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
	  	<h1>Julien Machon</h1>
	  	<p>Lead Full Stack Developer</p>
	  </header>
    <footer>
      <ul className="icons">
        <li><a href="https://twitter.com/julienmachon" className="fa-twitter">Twitter</a></li>
        <li><a href="https://github.com/julienmachon" className="fa-github">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/julien-machon-76832922/" className="fa-linkedin">LinkedIn</a></li>
      </ul>
    </footer>
  </div>
);

export default IndexPage;
