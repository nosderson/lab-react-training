function BoxColor({ r, g, b }) {

  function converterHex(cor) {
    return cor === 0 ? '00' : cor.toString(16)
  }

  function rgb(r, g, b) {
    return converterHex(r) + converterHex(g) + converterHex(b);
  }

  return (
    <div className="boxcolor border" style={{ backgroundColor: '#' + rgb(r, g, b) }}>
      <div className="rgb">
        <b>
          rgb({r},{g},{b})
        </b>
      </div>
      <b>
        <div>
          #{rgb(r, g, b)}
        </div>
      </b>
    </div>
  );
}

export default BoxColor;
