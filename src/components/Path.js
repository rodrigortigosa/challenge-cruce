const Path = (props) => {
  const departament = props.departament;
  const category = props.category;
  return (
    <span>
      {`Inicio / ${departament} / `}
      <b>{category}</b>
    </span>
  );
};

export default Path;
