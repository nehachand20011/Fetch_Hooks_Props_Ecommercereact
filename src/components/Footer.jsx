
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>&copy; 2023 Your Website. All rights reserved.</p>
        {/* <ul style={styles.list}>
          <li style={styles.listItem}><a style={styles.link} href="/">Home</a></li>
          <li style={styles.listItem}><a style={styles.link} href="/about">About</a></li>
          <li style={styles.listItem}><a style={styles.link} href="/contact">Contact</a></li>
        </ul> */}

<div class="w-50 m-auto border-end border-3">
          
            <h4 class="ms-5">Jamal, Kathmandu</h4>
           
            <h4 class="ms-5">E-mail:neha@gmail.com</h4>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    display: 'inline-block',
    marginRight: '10px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
  },
};

export default Footer;

