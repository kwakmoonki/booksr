import React, { useState } from "react";

function ButtonCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>버튼을 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭하세요
      </button>
    </div>
  );
}

export default ButtonCount;
