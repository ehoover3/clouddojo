import { useDispatch, useSelector } from "react-redux";
import { increment, setUsername } from "./redux/actions";

export default function Counter() {
  const dispatch = useDispatch();
  const { count, username } = useSelector((state: any) => state.counter);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Username: {username}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(setUsername("newUsername"))}>Set Username</button>
    </div>
  );
}
