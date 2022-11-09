function Rating(children) {
  
  let QuantEstrelas = Math.round(children.children);
  let texto = ""

  for (let i = 0; i < QuantEstrelas; i++) texto+="★";
  for (let i = QuantEstrelas; i < 5; i++) texto+="☆";      

  return (
    <div className="rating">
      <span>{texto}</span>
    </div>
  );
}
export default Rating;