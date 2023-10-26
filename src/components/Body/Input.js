function Input(props) {
  const { inputChange } = props;

  return (
    <div>
      <input id="input" type="date" onChange={inputChange} />
    </div>
  );
}
export default Input;
