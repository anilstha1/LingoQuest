import React, { useState } from 'react';
import './Forlanguageselect.css'; // Import your CSS file
import ChatBox from './Joinedupdate';


const Selectlanguage = () => {
    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    
  };
  return (
    <>
    <div className="title-container">
      <h2 className="title">Select the Prefered Language</h2>
      <div className="button-container">
      <button
          className={`button ${selectedButton === 'Newari' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Newari')}
        >Newari</button>

        <button
          className={`button ${selectedButton === 'Magari' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Magari')}
        >Magari</button>

        <button
          className={`button ${selectedButton === 'Bhojpuri' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Bhojpuri')}
        >Bhojpuri</button>
        <button
          className={`button ${selectedButton === 'Santali' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Santali')}
        >Santali</button>
        <button
          className={`button ${selectedButton === 'Munda' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Munda')}
        >Munda</button>
      </div>



    </div>
    <div class="Person-joined">
        <table class="person-table">
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
            </tr>
            
        </tbody>
    </table>
    </div>

<ChatBox/>
    </>
  );
};

export default Selectlanguage ;