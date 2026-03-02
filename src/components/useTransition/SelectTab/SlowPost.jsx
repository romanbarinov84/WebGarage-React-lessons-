const SlowPost = ({ index }) => {
  let result = 0;

  for (let i = 0; i < 500000; i++) {
    result += i;
  }

  return (
    <li style={{ color: "red", fontSize: "24px" }}>
      Element #{index + 1} — {result}
    </li>
  );
};

export default SlowPost;