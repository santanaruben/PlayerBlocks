import React from "react";
import { Keyframes, config } from "react-spring/renderprops";
import delay from "delay";
import styles from "./Contact.module.scss";
import { Facebook } from "react-content-loader";
import { Button } from "@material-ui/core";

const items = [
  {
    key: 1,
    content: <Facebook />,
  },
  {
    key: 2,
    content: "Home",
  },
  {
    key: 3,
    content: "Favourites",
  },
  {
    key: 4,
    content: "Sign out",
  },
];

const Menu = Keyframes.Spring({
  in: async (next) => {
    await next({
      transform: "translateX(80%)",
    });
  },
  out: async (next) => {
    await delay(700);
    await next({
      transform: "translateX(120%)",
    });
  },
});

const MenuItems = Keyframes.Trail({
  in: async (next) => {
    await delay(600);
    await next({
      opacity: 1,
      transform: "translateX(0px)",
    });
  },
  out: async (next) => {
    await next({
      opacity: 0,
      transform: "translateX(20px)",
    });
  },
});

class Contact2 extends React.Component {
  state = {
    menuOpen: false,
  };

  handleBtnClick = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };
  // ☰
  render() {
    let contacto = this.state.menuOpen ? "X" : "Contact us";
    return (
      <div className={styles.App}>
        <Button
          variant="text"
          color="primary"
          style={{
            position: "absolute",
            right: "35px",
            zIndex: "inherit",
          }}
          onClick={this.handleBtnClick}
        >
          {contacto}
        </Button>

        <Menu
          config={config.gentle}
          unique
          state={this.state.menuOpen ? "in" : "out"}
        >
          {(props) => (
            <nav style={props}>
              <ul className={styles.ul}>
                <MenuItems
                  keys={(item) => item.key}
                  items={items}
                  state={this.state.menuOpen ? "in" : "out"}
                  reverse={!this.state.menuOpen}
                >
                  {(trailitem) => (trailprops) => (
                    <li className={styles.li} style={trailprops}>
                      {trailitem.content}
                    </li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          )}
        </Menu>
      </div>
    );
  }
}

export default Contact2;
