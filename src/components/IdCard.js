function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="border">
        <img src={picture} alt="profile" />
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Birth: {birth}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;