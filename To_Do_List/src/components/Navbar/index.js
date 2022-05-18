import { FlexContener, Heder, TitelHeader } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Heder>
      <FlexContener>
        <FontAwesomeIcon icon={faListCheck} size="2x" color="white" />
        <TitelHeader>
          TO Do<span> List</span>
        </TitelHeader>
      </FlexContener>
    </Heder>
  );
}
export default NavBar;
