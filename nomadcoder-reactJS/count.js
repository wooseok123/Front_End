const root = document.getElementById("root");
const Title = () => {
  return (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
      Hello I'm a title
    </h3>
  );
};
/*
        const h3 = React.createElement(
            "h3",
            {
                onMouseEnter: () => console.log("mouse enter"),
            },
            "Hello i'm span"
        );
        */
const Button = () => {
  return (
    <button
      style={{
        backgroundColor: "tomato",
      }}
      onClick={() => console.log("i'm clicked")}
    >
      Click me
    </button>
  );
};

/*       
      const btn = React.createElement(
        "button",
        {
          onClick: () => console.log("i'm clicked"),
          style: {
            backgroundColor: "tomato",
          },
        },
        "Click me"
      ); */

const Container = (
  <div>
    <Title />
    <Button />
  </div>
);
ReactDOM.render(Container, root);

/* const container = React.createElement("div", null, [Title, Button]);
      ReactDOM.render(container, root); */
