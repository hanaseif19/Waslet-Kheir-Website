import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import './donor.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
const RequestCard = ({ image, title, description, progress, text }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';

  return (
    <div className="cardMariam">
      <img className="card-imgMariam" src={"https://t3.ftcdn.net/jpg/03/65/19/54/360_F_365195462_y5gKpvyI19DN2n8seBOjjX2uO1gQimnW.jpg"} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{text}</p>
        <br></br>
        <div className="button-container">

          <button className="donate-button">Donate</button>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button>
        </div>
        <div className="progress-container">
          <progress className={`progress-bar ${progressBarClass}`} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
//<i class="fas fa-heart-pulse"></i>
//<i class="fas fa-shirt"></i>

// function RequestCard(props) {
//   const { title, text } = props
//   return (
//     <Card style={{ width: '18rem', position: 'relative' }}>
//       <Card.Body className="card-body">
//         <div className="icon-container">
//           <FaUtensils className="utensils-icon" />
//         </div>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           {text}
//         </Card.Text>
//         <Button className ="donateButton">Donate Now</Button>
//       </Card.Body>
//     </Card>
//   );
// }