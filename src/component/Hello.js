import { useState } from "react";

export default function Hello(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState(props.age);
  //   let name = "Mike";
  //   function changeName() { 방법 1
  //     const newName = name === "Mike" ? "Jane" : "Mike";
  //     setName(newName);
  //   }

  return (
    <div>
      <h2 id="name">
        {/* 이 값은 컴포넌트 내부에서 생성할 수 없음. 전달받은 값을 그대로 써야함
        만약, 컴포넌트 내부에서 만들고 싶다면 state를 써야함 */}
        {name}({age}세)
      </h2>
      <button
        onClick={
          //changeName 방법 1
          //방법 2
          () => {
            setName(name === "Mike" ? "Jane" : "Mike");
            setAge(age + 1);
          }
        } 
      >
        Change
      </button>
    </div>
  );
}
