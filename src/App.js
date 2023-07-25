import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import { setDay, setEvent } from "./redux/features/eventSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { singleEvent } = useSelector((state) => state.events);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEvent(1)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (singleEvent?.eventSchedule && singleEvent.eventSchedule?.dayOne) {
      dispatch(setDay(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleEvent]);

  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
