function Random({max, min}) {
  const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="random border">
      Value between {min} and {max} =&#62; {aleatorio}
    </div>
  );
}

export default Random;