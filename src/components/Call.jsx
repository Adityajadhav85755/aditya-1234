import React from 'react';

const CallButton = () => {
  // Define the phone number for the call
  const phoneNumber = '+1234567890'; // Replace with your phone number, including country code

  return (
    <div>
      <a
        href={`tel:${phoneNumber}`}
        style={styles.button}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/WhatsApp.svg/1024px-WhatsApp.svg.png"
          alt="Call Us"
          style={styles.icon}
        />
        Call Us Now
      </a>
    </div>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  }
};

export default CallButton;
