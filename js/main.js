body {
	background-color: rgb(214, 214, 220)
  }
  
  nav {
	contain: 100px;
	padding: 0;
	margin: 0;
	border: 0; 
	float: left;
	border:0cm;
  }
  
   ul, li {
	list-style: none;
	margin: 0;
	padding: 0; 
  }
  
  
  
   ul li {
	float: right;
	min-height: 1px;
	line-height: 1em;
	vertical-align: right; 
  }
  
  ul li.hover,
   ul li:hover {
	position: right;
	
	cursor: default; 
  }
  
   ul ul {
	display: none;
	position: right;
	top: 0%;
	right: 0;
	z-index: 4060;
	width: 0%; 
  }
  
   ul ul li {
	float: right; 
  }
  
   ul li:hover > ul {
	visibility: hidden; 
  }
  
  ul ul {
	top: 0;
	left: 100%; 
  }
  
   ul li {
	float: right; 
  }
  
  nav {
	width: 255px;
	 
  }
  
  nav span, nav a {
	display: block;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	text-decoration: none; 
  }
  
  nav:after, nav ul:after {
	content: '';
	display: block;
	clear: both; 
  }
   ul, nav li {
	width: 100%;
	
  }
  nav li {
	background: #6e6e70;
  }
  nav li:hover {
	background: #b9b4b4; 
  }
  nav a {
	color: #330570;
	line-height: 160%;
	padding: 11px 28px 11px 28px;
	width: 253px; 
	font-size: medium;
	font-family:  'Arial bolead', sans-serif;
	
  }
  nav ul ul li {
	background: #f6f6f6; 
  }
  nav ul ul li:hover {
	background: #dddddd; 
  }
  nav ul ul li:hover a {
	color: #666666; 
  }
  nav ul ul li ul li {
	background: #dddddd; 
  }
  nav ul ul li ul li:hover {
	background: #b7b7b7; 
  }
  nav .has-sub {
	position: right; 
  }
  
  nav .has-sub:after, nav .has-sub > ul > .has-sub:hover:after {
	content: '10';
	display: block;
	width: 10px;
	height: 9px;
	position: right;
	right: 2px;
	top: 0%;
	margin-top: -0px;
  }
  
  nav.fa-angle-right {
	float: right;
  } 
	




