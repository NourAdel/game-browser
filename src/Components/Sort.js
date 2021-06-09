import { useContext, useRef } from "react";
import { FilteringContext } from "../Context/FilteringContext";
import { GamesContext } from "../Context/GamesContext";

//components
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import "../Styles/Sort.css";

function Sort() {
  const {
    SORTBYVALUES,
    sortByValue,
    sortOpen,
    handleSortListKeyDown,
    handleSortToggle,
    handleSortClose,
  } = useContext(FilteringContext);

  const { loader } = useContext(GamesContext);

  // refrence to the button triggering the menu
  const anchorRef = useRef(null);

  const renderOptions = () => {
    return SORTBYVALUES.map((value, index) => {
      return (
        <MenuItem onClick={handleSortClose} id={index}>
          {value}
        </MenuItem>
      );
    });
  };

  // in case of LOADING
  if (loader) return null;

  return (
    <div className="outterSortContainer">
      Sort By
      <div className="sortContainer">
        {/*  triggering button */}
        <Button
          ref={anchorRef}
          aria-controls={sortOpen ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleSortToggle}
        >
          <h4> {sortByValue}</h4>
        </Button>

        {/* drop down list  */}
        <Popper
          open={sortOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleSortClose}>
                  <MenuList
                    autoFocusItem={sortOpen}
                    id="menu-list-grow"
                    onKeyDown={handleSortListKeyDown}
                  >
                    {renderOptions()}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default Sort;
