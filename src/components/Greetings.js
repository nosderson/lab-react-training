function Greetings(props) {
  return (
    <div className="greetings border">
      <b>
        {props.lang === "de" ? "Hallo " : ""}
        {props.lang === "en" ? "Hello " : ""}
        {props.lang === "es" ? "Hola " : ""}
        {props.lang === "fr" ? "Bonjour " : ""}
      </b>
      {props.children}
    </div>
  );
}
export default Greetings;