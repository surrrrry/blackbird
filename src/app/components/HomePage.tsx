import Link from "next/link";

export default function HomePage() {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>YouTube Services</h3>
            <div style={styles.cardContainer}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <Link href="/page1">
                        <p>YouTube Downloader</p>
                    </Link>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <Link href="/page2">
                        <p>Auto Youtube Downloader Dashboard </p>
                    </Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <h3 style={styles.heading}>Future Services</h3>
            <div style={styles.cardContainer}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <Link href="/dne">
                        <p>Future Service 1</p>
                    </Link>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <Link href="/dne">
                        <p>Future Service 2</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}


// Inline styles (you can use CSS modules or other methods)
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    textAlign: 'left', // Right-align the text
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
};
