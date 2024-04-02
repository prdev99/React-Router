import { useState } from "react";

const Demo = () => {
  const [data, setData] = useState({ nme: "Addam", age: 24 });
  return (
    <>
      <h1>State and Object</h1>
      <input
        type="text"
        value={data.nme}
        onChange={(e) => {
          setData({ ...data, nme: e.target.value });
        }}
      />
      <input
        type="text"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <h4>{data.nme}</h4>
      <h4>{data.age}</h4>
    </>
  );
};

export default Demo;
