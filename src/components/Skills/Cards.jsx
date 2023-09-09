function Cards(props) {
  return (
    <article>
      <img
        src="https://img.icons8.com/?size=24&id=98971&format=png"
        alt="arrow"
        class="icon"
      />
      <div>
        <h3>{props.title}</h3>
        <p>{props.level}</p>
      </div>
    </article>
  );
}

export default Cards;
