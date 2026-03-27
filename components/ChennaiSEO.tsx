export default function ChennaiSEO() {
  const areas = [
    'Anna Nagar', 'T. Nagar', 'Velachery', 'OMR', 'Porur', 'Sholinganallur',
    'Tambaram', 'Chromepet', 'Adyar', 'Nungambakkam', 'Perungudi', 'Guindy',
    'Mylapore', 'Pallavaram', 'Ambattur',
  ];

  const industries = [
    '🏥 Healthcare & Clinics',
    '🏠 Real Estate',
    '🎓 Education & Coaching',
    '🛒 E-Commerce',
    '🍽️ Restaurants & F&B',
    '💻 IT & Software',
    '⚖️ Legal & Professional Services',
    '🏗️ Construction & Interior',
  ];

  return (
    <section className="chennai" id="chennai-seo">
      <div className="container">
        <div className="section-header">
          <h2>Digital Marketing Agency Serving Chennai &amp; Tamil Nadu</h2>
          <p>Helping local businesses across Chennai grow online with proven AI-powered strategies</p>
        </div>

        <div className="chennai__body">
          <p>
            Based in <strong>Urappakam, Chennai</strong>, DigiBoomi has helped hundreds of businesses across Tamil Nadu establish a powerful online presence. Whether you run a local shop in <strong>T. Nagar</strong>, a tech startup in <strong>OMR</strong>, a clinic in <strong>Anna Nagar</strong>, or an e-commerce brand in <strong>Velachery</strong> — our AI-powered digital marketing strategies are designed to get you found on Google and convert visitors into paying customers.
          </p>
          <p>
            We understand the Chennai market deeply — local search behaviour, competitive landscape, and what it takes to rank for high-intent keywords like <em>&quot;digital marketing agency in Chennai&quot;</em>, <em>&quot;SEO services Chennai&quot;</em>, and <em>&quot;Google Ads agency Tamil Nadu&quot;</em>. Our local SEO expertise ensures your business appears at the top when Chennai customers search for your services.
          </p>
        </div>

        <div className="chennai__areas-wrap">
          <h3>Areas We Serve in Chennai</h3>
          <div className="chennai__areas">
            {areas.map(area => <span key={area}>{area}</span>)}
          </div>
        </div>

        <div className="chennai__industries-wrap">
          <h3>Industries We Work With</h3>
          <div className="chennai__areas chennai__areas--industries">
            {industries.map(ind => <span key={ind}>{ind}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
