const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Blackbird. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--background)', // Matches the page background color
    color: 'var(--foreground)', // Matches the page text color
    textAlign: 'center' as const,
    padding: '10px 20px',
    marginTop: '20px',
    fontSize: '14px',
    // borderTop: '1px solid var(--foreground)', // Optional: adds a top border
  },
  text: {
    margin: 0,
  },
};

export default Footer;