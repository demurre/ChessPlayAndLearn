import PromotionBox from "./PromotionBox";
import "./Popup.css";
import { useAppContext } from "../../contexts/Context";
import { Status } from "../../constants";
import { closePopup } from "../../reducer/actions/Popup";

const Popup = () => {
  const { appState, dispatch } = useAppContext();
  if (appState.status === Status.ongoing) return null;
  const onClosePopup = () => {
    dispatch(closePopup());
  };
  return (
    <div className="popup">
      <PromotionBox onClosePopup={onClosePopup} />
    </div>
  );
};
export default Popup;
