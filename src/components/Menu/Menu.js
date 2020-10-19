import React, { useState, useEffect } from "react";
import SubMenu from "../SubMenu/SubMenu";
import ItemDetail from "../ItemDetail/ItemDetail";
import fakeData from "../../resources/fakeData";
import MenuBar from "../MenuBa/MenuBar";

const Menu = () => {
  const data = fakeData;
  const [curCategory, setCurCategory] = useState("lunch");
  const [fullMenu, setFullMenu] = useState(data);
  const [curMenu, setCurMenu] = useState([]);
  const [curItem, setCurItem] = useState(null);
  const [cart, setCart] = useState(
    sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : []
  );

  console.log(cart);
  useEffect(() => {
    if (curCategory !== "") {
      const current = fullMenu.filter((item) => item.type === curCategory);

      setCurMenu(current);
    }
  }, [curCategory]);

  const handleMenu = (submenu) => {
    setCurCategory(submenu);
    setCurItem(null);
  };

  const handleItem = (item) => {
    setCurItem(item);
    setCurCategory("");
  };

  const handleCart = (item, quantity) => {
    const newCart = cart.filter((el) => el.id !== item._id);

    setCart([
      ...newCart,
      {
        id: item._id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: quantity,
      },
    ]);
    setCurItem(null);
    setCurCategory(item.type);
  };

  const handleOrder = () => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <MenuBar handleMenu={handleMenu} curCategory={curCategory}></MenuBar>
      {curItem ? (
        <ItemDetail item={curItem} handleCart={handleCart}></ItemDetail>
      ) : (
        <SubMenu
          curMenu={curMenu}
          handleItem={handleItem}
          handleOrder={handleOrder}
          emptyCart={!cart.length}
        ></SubMenu>
      )}
    </div>
  );
};

export default Menu;
