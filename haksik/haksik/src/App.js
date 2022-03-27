import Input from "./Input";

const App = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  console.log(winHeight);
  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-block",
        margin: "0 auto",
      }}
    >
      <form>
        <fieldset
          style={{
            lineHeight: "50px",
          }}
        >
          <Input ID={"아이디"} width={150} fontSize={30} />
          <Input ID={"패스워드"} width={150} fontSize={30} />
          <button type="submit">로그인하기</button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;

// resize 이벤트로 반응형 만들어야 함
