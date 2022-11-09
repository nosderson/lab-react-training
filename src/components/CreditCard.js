import bandeira from "../assets/images/visa.png";

function CreditCard({ bgColor, color, type, bank, number, expirationMonth, expirationYear, owner, url }) {
  if (url)
    bandeira = url;
  return (
    <div class="creditcard" style={{ backgroundColor: bgColor, color: color }}>
      <div>
        <div className="icone">
          <img src={bandeira} alt={type} />
        </div>
        <div className="numero">
          •••• •••• •••• {number.slice(-4)}
        </div>
        <div className="info">
          <div>
            Expires: {expirationMonth}/{expirationYear}
          </div>
          <div>
            {bank}
          </div>
        </div>
        <div>
          {owner}
        </div>
      </div>
    </div>
  );
}

export default CreditCard;