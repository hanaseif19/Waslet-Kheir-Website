// import { Link } from 'react-router-dom';
// import '../App.css';
// import React, { useEffect, useState } from 'react';
// import Footer from '../Footer';
// import OrgNavBar2 from './NavbarOrg';
// import Notif from './Notif';
// import CarouselImage from './Success';


// function OrgMainPage() {
//     const contentStyle = {
//         position: 'relative',
//         width: '100%',
//         height: '750px',
//         textAlign: 'center',
//         color: '#fff',
//     };

//     const textStyle = {
//         position: 'absolute',
//         width: '100%',
//         top: '50%', // Center vertically
//         left: '50%', // Center horizontally
//         transform: 'translate(-50%, -50%)',
//         fontSize: '48px', // Large font size for visibility
//         color: '#fff', // White text color
//         textShadow: '2px 2px 8px rgba(0,0,0,0.8)', // Text shadow for better readability
//     };

//     const [showNavbar, setShowNavbar] = useState(false);

//     useEffect(() => {
//         void document.body.offsetWidth;
//     }, []);


//     //Method below makes it so that the navbar appears when scrolling down
//     useEffect(() => {
//         const handleScroll = () => {
//             const show = window.scrollY > 750;
//             if (show !== showNavbar) {
//                 setShowNavbar(show);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [showNavbar]);
//     let navbarClass = '';
//     if (showNavbar) {
//         navbarClass = 'fixed-navbar';
//     }
//     else {
//         navbarClass = 'navbar-hidden';
//     }

//     // Scroll to top when refreshing
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);



//     return (
//         /* <Router>*/
//         <div>
//             {/* <NavbarOrg className={navbarClass} />* */}
//             <OrgNavBar2 />
//             {/* <CarouselImage /> */}
//             <div className="parallax-image">
//                 <div className="centered-text">
//                     <h1  className="fading-text">Waslet Kheir</h1>
//                     <h2 className="fading-text">Connecting the World</h2>
//                 </div>
//             </div>
//             <div className="spaces">

//             </div>
//             <div className="our-goal-section">
//                 <h1 className="header">
//                     About Us
//                 </h1>
//                 <h3>We aim to improve lives through the generosity of our
//                     donors. Every donation contributes to making the world
//                     a better place. A myriad of donations can be made such as food, clothing, medicine, and many more.
//                     Through these donations, many individuals and communities are able to receive the support and resources
//                     they need to thrive. Our donations are classified into different categories.
//                 </h3>


//             </div>

//             <Footer></Footer>
//         </div>

//     );
// }

// export default OrgMainPage;





