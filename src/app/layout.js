import './globals.css';
import Header from './Header';

export const metadata = {
  title: 'Nos engagements | Experience Morocco',
  description:
    'Découvrez les engagements d’Experience Morocco pour un voyage plus authentique, plus local et plus responsable au Maroc.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-section">
              <img src="/logo-centered.png" alt="Experience Morocco" className="footer-logo" />
              <p style={{ color: '#b8b8b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Voyages sur mesure au Maroc, conçus avec des experts locaux passionnés
                par leur pays et son patrimoine.
              </p>
            </div>
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Our Offerings</a></li>
                <li><a href="#">Get Inspired</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Get in Touch</h4>
              <ul>
                <li><a href="mailto:contact@experiencemorocco.com">contact@experiencemorocco.com</a></li>
                <li><a href="tel:+16462498881">+1 646 249 8881</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p style={{ color: '#b8b8b8', fontSize: '0.88rem', marginBottom: '1rem' }}>
                Recevez nos plus belles idées de voyage et nos engagements en avant-première.
              </p>
              <form className="footer-newsletter" style={{ display: 'flex', gap: '0.4rem' }}>
                <input type="email" placeholder="Votre email" />
                <button type="submit" className="btn-primary">OK</button>
              </form>
            </div>
          </div>
          <div className="container footer-bottom">
            © {new Date().getFullYear()} Experience Morocco — Tous droits réservés. Maquette de prévisualisation.
          </div>
        </footer>
      </body>
    </html>
  );
}
