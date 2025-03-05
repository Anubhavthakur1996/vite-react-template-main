import {
  setMobileMode,
  sysThemeSelector,
  userThemeSelector,
} from "./utils/utils";
import { useDispatch } from "react-redux";
import Routes from "./routes";
import FormModal from "./components/common/FormModal";

function App() {
  const dispatch = useDispatch();
  const theme = localStorage.getItem("theme");

  if (theme) {
    userThemeSelector(theme);
  } else {
    sysThemeSelector();
  }

  setMobileMode(dispatch);

  return (
    <div className="bg-primary flex h-screen w-screen">
      <FormModal />
      <Routes />
    </div>
  );
}

export default App;
