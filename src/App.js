import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearContactDetails, setContactDetails } from "./contactDetailsAction";
import "./styles.css";

export default function App() {
  const selector = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{selector.personName}</h1>
      <h2>{selector.age}</h2>
      <button onClick={() => dispatch(setContactDetails())}>Get Contact</button>
      <button onClick={() => dispatch(clearContactDetails())}>
        Clear Contact
      </button>
    </div>
  );
}
