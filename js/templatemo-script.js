/*

*/

html, body, .page-container {
    height: 100%;
}
html {
    scroll-behavior: smooth;
}
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    color: black;
}
#popup hr {
width: 750px;
}
.content a {
position: relative;
padding: 5px 20px;
display: inline-block;
margin-top: 20px;
text-decoration: none;
color: #fff;
background: #111;
}
#popup a{
        position: relative;
        padding: 5px 20px;
        display: inline-block;
        margin-top: 20px;
        margin-left: 680px;
        text-decoration: none;
        color: white;
      background: black;
    border-radius: 50px;
        cursor: pointer;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: bold;
}
#popup p{
padding-top: -10px;
margin-right: 50px;
}
#popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 900px;
    height: 500px;
    padding-top: 20px;
    padding-left: 50px;
    box-shadow: 0 5px 30px rgba(0,0,0,.30);
    background: #fff;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
}
#popup.active{
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
}
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 100px auto;
}
.container2#blur.active{
    filter: blur(20px);
    pointer-events: none;
    user-select: none;
}
.container1 {
    padding: 10px 50px;
    position: relative;
    width: 50%;
    animation: movedown 1s linear forwards; 
    opacity: 0;
}
@keyframes movedown {
    0%{
        opacity: 1; 
        transform: translateY(-30px);
    }
    100%{
        opacity: 1; 
        transform: translateY(0px);
    }
}
.container1:nth-child(1){
    animation-delay: 0s;
}
.container1:nth-child(2){
    animation-delay: 1s;
}
.container1:nth-child(3){
    animation-delay: 2s;
}
.container1:nth-child(4){
    animation-delay: 3s;
}
.container1:nth-child(5){
    animation-delay: 4s;
}
.container1:nth-child(6){
    animation-delay: 5s;
}

.text-box {
    padding: 20px 30px;
    background: #fff;
    position: relative;
    border-radius: 6px;
    font-size: 15px;
}
.left-container {
    left: 0;
}
.right-container {
    left: 50%;
}
.container1 img{
    position: absolute; 
    width: 40px;
    border-radius: 50%;
    right:-20px;
    top: 32px; 
    z-index: 10; 
}
.right-container img {
    left: -20px;
}
.timeline::after{
    content: '';
    position: absolute; 
    width: 6px;
    height: 100%; 
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 6s linear forwards;
}
@keyframes moveline {
    0% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}
.text-box h2 {
    font-weight: 600;
}
.text-box small {
    display: inline-block;
    margin-bottom: 15px;
}
.left-container-arrow {
    height: 0;
    width: 0;
    position: absolute; 
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent; 
    border-left: 15px solid #fff; 
    right: -15px; 
}
.right-container-arrow {
    height: 0;
    width: 0;
    position: absolute; 
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent; 
    border-right: 15px solid #fff; 
    left: -15px; 
}
/* Initial state - items are hidden */
.timeline .container1 {
    opacity: 0;
    transition: opacity 1s;
}

/* Animated state - items are visible */
.timeline .container1.animated {
    opacity: 1;
}
@media screen and (max-width: 600px){
.timeline {
    margin: 50px auto;
}
.timeline::after{
    left: 31px;
}
.container{
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;
}
.text-box{
    font-size: 13px;
}
.text-box small{
    margin-bottom: 10px;
}
.right-container{
    left: 0;
}
.left-container img, .right-container img{
    left: 10px;
}
.left-container-arrow, .right-container-arrow{
    border-right: 15px solid #fff;
    border-left: 0; 
    left: -15px;
}
}
#progress {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 10px; /* Set both left and right to 0 */
    margin: auto; /* Center horizontally */
    height: 70px;
    width: 70px;
    display: none;
    place-items: center;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  #progress-value {
    display: block;
    height: calc(100% - 15px);
    width: calc(100% - 15px);
    background-color: #ffffff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 35px;
    color: #001a2e;
  }
.navBar {
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100px;
    background-color: white;
    transform: 0.5s;
    padding: 0 200px;
    transition: 0.5s;
  }
  .navBar .logo {
  line-height: 100px;
  color: black;
  text-transform: none;
  font-size: 32px;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  }
  .navBar ul{
  list-style: none;
  float: right;
  line-height: 100px;
  }
  .navBar ul li{
    display: inline-block;
    padding: 0 20px;
  }
  .navBar ul li a{
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.5s;
  }
  .navBar ul li a:hover {
    color: darkblue;
  }
  .navBar.animate{
  top: -100px;
  }
  .navBar.sticky{
    top: 0;
    z-index: 99;
  }
body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 19px;
    font-weight: 300;
    color: white;
    line-height: 1.5;
}
.hover-underline-animation{
    display: inline-block;
    position: relative;
    color: #0087ca;
}

.hover-underline-animation:after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 30px;
    left: 0;
    background-color: #8ea5eb;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
    transform:  scaleX(1);
    transform-origin: bottom left;
}

a {
	color: #9F6;
    text-decoration: none;
    transition: all 0.3s ease;
}

a:hover {
	color: #3CF;
}

p {
    line-height: 1.7;
}

h2 {
    font-size: 1.8rem;
}

.highlight {
    color: #99FF66;
}

.page-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
}

.container-fluid {
    max-width: 1860px;
}

.btn {
    font-size: 1.3rem;
    padding: 13px 23px;
    border-radius: 0;
}

.btn-primary {
    background-color: white;
    border: none;
    color: #333;
}

.btn-primary:hover,
.btn-primary:focus {
    color: #5cac38;
    background-color: white;
}

/* Style the video: 100% width and height to cover the entire window */
#bg-video {
    position: fixed;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -100;
    background-image: url(../img/tm-astro-bg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.hero{
    width: 100%;
    height: 100vh;
    background: #a9a9a9;
    display: flex;
    align-items: center;
    justify-content: center;
}


#tm-nav {
    z-index: 1000;
}

.navbar a {
    color: white;
}

.navbar-brand {
    font-size: 2.4rem;
}

.navbar {
    margin-top: 15px;
}

.navbar .navbar-nav .nav-item {
    margin-left: 15px;
    margin-right: 15px;
}

.navbar .navbar-nav .nav-item:last-child {
    margin-right: 0;
}

.navbar .navbar-nav .nav-item .nav-link {
    font-size: 1.5rem;
    padding: 15px 65px;
    border-bottom: 1px solid white;
}

.nav-item {
    position: relative;
}

.circle {
    position: absolute;
    left: calc(50% - 10px);
    bottom: -10px;
    width: 20px;
    height: 20px; 
    background-color: white;
    border-radius: 50%;
}

.tm-border-bottom {
    border-bottom: 1px solid white;
    padding-bottom: 48px;
}

.tm-border-top {
    border-top: 1px solid white;
    padding-top: 48px;
}

.navbar .navbar-nav .nav-item.selected .nav-link,
.navbar .navbar-nav .nav-item .nav-link:hover {
    color: #99FF66;
    border-bottom: 1px solid #99FF66;
}

.cd-slider-nav li.selected a+.circle,
.navbar .navbar-nav .nav-item .nav-link:hover+.circle {
    background-color: #99FF66;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-toggler {
    border: 1px solid rgba(255,255,255,1);
}

.navbar-toggler:focus {
    box-shadow: none;
}

.tm-link-white {
    color: white;
}

.tm-link-white:hover,
.tm-link-white:focus {
    color: #99FF66;
}

.cd-hero-slider {
    padding: 10px 0;
}

.cd-hero-slider li { 
    list-style: none;
}

.content-pad {
    padding: 40px 30px;
}

.page-width-1 {
    max-width: 810px;
}

.page-width-2 {
    max-width: 912px;
}

.page-left {
    margin-left: 100px;
}

.page-right {
    margin-right: 100px;
    margin-left: auto;
}

.tm-bg-dark {
    background-color: rgba(0,0,0,0.3);
}

.intro-left {
    margin-right: 20px;
    padding: 30px 40px;
    max-width: 1000px;    
}

.intro-img-1 {
    margin-bottom: 20px;
}

.intro-circle-1 {
    left: -20px;
    top: -10px;
}

.intro-circle-2 {
    right: -20px;
    top: -10px;
    left: auto;
}

.intro-circle-3 {
    right: -20px;
    bottom: -10px;
    left: auto;
}

.intro-circle-4 {
    left: -20px;
    bottom: -10px;
}

.tm-intro-btn {
    margin-top: 25px;
}

.tm-footer {
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

/* Gallery page */
.gallery-container {
    max-width: 1300px;
}

.slick-dots {
    bottom: -80px;
}

.gallery-slider figure {
	position: relative;
	float: left;
    overflow: hidden;
    margin: 0;
    max-width: 240px;
    margin-left: 10px;
    margin-right: 10px;
	height: auto;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}

.gallery-slider figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
}

.gallery-slider figure figcaption {
	padding: 1em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.gallery-slider figure figcaption::before,
.gallery-slider figure figcaption::after {
	pointer-events: none;
}

.gallery-slider figure figcaption,
.gallery-slider figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.gallery-slider figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.gallery-slider figure h2 {
	word-spacing: -0.15em;
  font-weight: 300;
  font-size: 28px;
}

.gallery-slider figure h2 span {
	font-weight: 800;
}

.gallery-slider figure h2,
.gallery-slider figure p {
	margin: 0;
}

.gallery-slider figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}

.gallery-section {
  background-color: #99ccff;
}

.gallery-section .title {
  padding-right: 13px;
  margin-bottom: 80px;
}

/*---------------*/
/***** Julia *****/
/*---------------*/

figure.effect-julia {
	background: #2f3238;
}

figure.effect-julia img {
	-webkit-transition: opacity 1s, -webkit-transform 1s;
	transition: opacity 1s, transform 1s;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

figure.effect-julia figcaption {
	display: flex;
  align-items: center;
}

figure.effect-julia h2 {
	position: relative;
	padding: 0.5em 0;
}

figure.effect-julia p {
	display: inline-block;
	margin: 0 0 0.25em;
	padding: 0.4em 1em;
	background: rgba(255,255,255,0.9);
	color: #2f3238;
	text-transform: none;
	font-weight: 500;
	font-size: 75%;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-360px,0,0);
	transform: translate3d(-360px,0,0);
}

figure.effect-julia p:first-child {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}

figure.effect-julia p:nth-of-type(2) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

figure.effect-julia p:nth-of-type(3) {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
}

figure.effect-julia:hover p:first-child {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}

figure.effect-julia:hover p:nth-of-type(2) {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
}

figure.effect-julia:hover p:nth-of-type(3) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

figure.effect-julia:hover img {
	opacity: 0.4;
	-webkit-transform: scale3d(1.1,1.1,1);
	transform: scale3d(1.1,1.1,1);
}

figure.effect-julia:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.gallery-slider .slick-dots li.slick-active, 
.gallery-slider .slick-dots li:hover {
    background-color: #3CCDFF;
}

.gallery-slider .slick-dots li {
    background-color: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin: 0 10px;
    transition: all 0.3s ease;
}

/* About page */
.tm-about-container {
    border-top: 1px solid white;
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid white;
}

/* Contact page */
.tm-contact-left {
    padding-right: 55px;
}

.form-control {
    font-size: 1.2rem;
    padding: 15px 0;
}

.form-control,
.form-control:focus {
    color: white;
    background-color: transparent;
}

.form-control:focus {
    border-bottom: 1px solid #99FF66;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

.form-control::-webkit-input-placeholder { color: white; }
.form-control:-moz-placeholder { color: white; }
.form-control::-moz-placeholder { color: white; }
.form-control:-ms-input-placeholder { color: white; }

.tm-mb-30 {
    margin-bottom: 30px;
}

.tm-mb-45 {
    margin-bottom: 45px;
}

.tm-btn-pad-2 {
    padding: 10px 38px;
}

.map-outer{
    position:relative;
}

.gmap-canvas {
    overflow:hidden;
    background:none!important;
}

.map-outer,
.gmap-canvas {
    height:200px;
    width:100%;
}

.tm-footer-right {
    text-align: right;
}

@media (min-width: 992px)
{
    .navbar-expand-lg .navbar-collapse {
        justify-content: flex-end;
    }
}

@media (max-width: 1200px) {
    .navbar .navbar-nav .nav-item .nav-link {
        padding: 15px 45px;
    }
}

@media (max-width: 1024px) {
    .navbar .navbar-nav .nav-item .nav-link {
        font-size: 1.2rem;
    }
}

@media (max-width: 992px) {
    .navbar {
        margin-top: 0;
    }

    .navbar {
        position: relative;
    }
    
    .navbar-collapse {
        position: absolute;
        top: 63px;
        right: 0;
        background: rgb(54 75 96);
        border-radius: 5px;
    }

    .navbar .navbar-nav .nav-item {
        margin-bottom: 20px;
    }

    .page-left,
    .page-right {
        margin-left: auto;
        margin-right: auto;
    }

    .cd-hero-slider {
        padding: 10px 0;
    }
}

@media (max-width: 834px) {
    .intro-left {
        width: 65%;
    }

    .intro-right {
        width: 35%;
    }
}

@media (max-width: 767px) {
    .tm-contact-left {
        padding-right: 15px;
        margin-bottom: 50px;
    }

    .tm-footer-right {
        text-align: left;
        margin-top: 10px;
    }
}

@media (max-width: 600px) {
    .intro-left,
    .intro-right {
        width: 100%;
    }

    .intro-left {
        margin-right: 0;
        margin-bottom: 20px;
        max-width: none;
    }

    .intro-right {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .intro-container {
        flex-direction: column;
    }

    .intro-img-1 {
        margin-right: 4%;
        margin-bottom: 0;
        width: 48%
    }

    .intro-img-2 {
        width: 48%;
    }
}

.preview-container{
position:absolute;
top: 0;
right: -300px;
width: 300px;
height: 45%;
background-color: #f1f1f1;
transition: right 0.3s ease-in-out;
cursor:pointer;
}
.pre-container{
position: absolute;
top: 0;
left: -300px;
width: 300px;
height: 100%;
background-color: #f1f1f1;
transition: left 0.3s ease-in-out;
cursor: pointer;
}

/* Preloader 
	https://ihatetomatoes.net/create-custom-preloading-screen/
*/
/* ==========================================================================
   Author's custom styles
   ========================================================================== */
   #loader-wrapper { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2000; }
   #loader { display: block; position: relative; left: 50%; top: 50%; width: 150px; height: 150px; margin: -75px 0 0 -75px; border-radius: 50%; border: 3px solid transparent; border-top-color: #3498db; /* Chrome, Opera 15+, Safari 5+ */
   	animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */ z-index: 2001; }
   #loader:before { content: ""; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px; border-radius: 50%; border: 3px solid transparent;
   	border-top-color: #e74c3c; /* Chrome, Opera 15+, Safari 5+ */
   animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */ }
   #loader:after { content: ""; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; border-radius: 50%; border: 3px solid transparent;
border-top-color: #f9c922; /* Chrome, Opera 15+, Safari 5+ */ animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */ }
@keyframes spin {
	0%   {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */
		transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
	}
	100% {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */
		transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
	}
}

#loader-wrapper .loader-section { position: fixed; top: 0; width: 51%; height: 100%; background: #222222; z-index: 2000;  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */ transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */}

#loader-wrapper .loader-section.section-left { left: 0; }

#loader-wrapper .loader-section.section-right { right: 0; }

/* Loaded */
.loaded #loader-wrapper .loader-section.section-left {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */
	transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */  
	transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.loaded #loader-wrapper .loader-section.section-right {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */
	transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */  
	transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.loaded #loader {
	opacity: 0;  
	transition: all 0.3s ease-out;
}
.loaded #loader-wrapper {
	visibility: hidden;  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */
	transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */  
	transition: all 0.3s 1s ease-out;
}
/* JavaScript Turned Off */
.no-js #loader-wrapper { display: none; }
/*============ Preloader ends ==================================*/
