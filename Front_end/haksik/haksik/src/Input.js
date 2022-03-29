const Input = ({ ID, width, fontSize }) => {
  let inputType;
  if (ID === "아이디") {
    inputType = "text";
  } else {
    inputType = "password";
  }
  return (
    <div
      className="Input"
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <label
        htmlFor={ID}
        style={{
          display: "inline-block",
          width: `${width}px`,
          textAlign: "center",
          fontSize: `${fontSize}px`,
        }}
      >
        {ID}
      </label>
      <input
        id={ID}
        type={inputType}
        required
        style={{
          height: `${fontSize}px`,
          display: "inline-block",
        }}
      ></input>
    </div>
  );
};

export default Input;
