import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./menu.module.css";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Cartcontext } from "../context/cartcontext";
import { useToast } from "@chakra-ui/react";
const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const { cart, setcart} = useContext(Cartcontext);
  const toast = useToast();
  const ToastExample = () =>
    toast({
      title: "Cart",
      description: "We've Added item to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  const handlecart = (e) => {
    setcart([...cart, e]);
    ToastExample();
  };
  useEffect(() => {
    axios.get("https://kfc-ykp5.onrender.com/items").then(function (res) {
      setData(res.data);
    });
  }, []);
  console.log("data",data)

  return (
    <div className={style.container}>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            style={{
              borderBottom: "1px solid grey",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            START YOUR ORDER
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            style={{
              textAlign: "center",
              fontWeight: "700",
              backgroundColor: "#f8f7f5",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <h1
              style={{
                marginTop: "25px",
                fontWeight: "900",
                fontSize: "24px",
              }}
            >
              HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                margin: "auto",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "10px 90px 10px 90px",
                  marginTop: "20px",
                }}
              >
                Pick up
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "10px 90px 10px 90px",
                  marginTop: "20px",
                }}
              >
                Dine In
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "10px 90px 10px 90px",
                  marginTop: "20px",
                }}
              >
                Delivery
              </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={style.left}>
        <img
          src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          alt="Red Bars"
          width="60px"
        />
        <div className={style.menuheading}>KFC MENU</div>
        <div className={style.listheading}>
          <Link to="#CHICKEN_BUCKETS" smooth>
            CHICKEN BUCKETS
          </Link>
          <Link to="#NEW_LAUNCH"> NEW LAUNCH</Link>
          <Link to="#CHICKEN_ROLLS" smooth>
            CHICKEN ROLLS
          </Link>
          <Link to="#BIRYANI_BUCKETS" smooth>
            BIRYANI BUCKETS
          </Link>
          <Link to="#BOX_MEALS" smooth>
            BOX MEALS
          </Link>
          <Link to="#BURGERS" smooth>
            BURGERS
          </Link>
          <Link to="#STAY_HOME_SPECIALS" smooth>
            STAY HOME SPECIALS
          </Link>
          <Link to="#SNACKS" smooth>
            SNACKS
          </Link>
          <Link to="#BEVERAGES" smooth>
            BEVERAGES
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <div id="CHICKEN_BUCKETS">
          <h1 style={{marginTop:"1%"}}>CHICKEN BUCKETS</h1>
          <div className={style.itemcontainer}>
            {!data.chicken_buckets
              ? "Loading..."
              : data.chicken_buckets.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>
                    <h2>{ele.description}</h2>
                    <button
                      className={style.addtocart}
                      onClick={() => handlecart(ele)}
                    >
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="NEW_LAUNCH">
          <h1>NEW LAUNCH</h1>

          <div className={style.itemcontainer2}>
            {!data.new_launch
              ? "Loading"
              : data.new_launch.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="CHICKEN_ROLLS">
          <h1>CHICKEN ROLLS</h1>
          <div className={style.itemcontainer2}>
            {!data.chicken_rolls
              ? "Loading"
              : data.chicken_rolls.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="BIRYANI_BUCKETS">
          <h1>BIRYANI BUCKETS</h1>
          <div className={style.itemcontainer2}>
            {!data.biryani_buckets
              ? "Loading"
              : data.biryani_buckets.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="BOX_MEALS">
          <h1>BOX MEALS</h1>
          <div className={style.itemcontainer2}>
            {!data.box_meals
              ? "Loading"
              : data.box_meals.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="BURGERS">
          <h1>BURGERS</h1>
          <div className={style.itemcontainer2}>
            {!data.burgers
              ? "Loading"
              : data.burgers.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="STAY_HOME_SPECIALS">
          <h1>STAY HOME SPECIALS</h1>
          <div className={style.itemcontainer2}>
            {!data.stay_home_special
              ? "Loading"
              : data.stay_home_special.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="SNACKS">
          <h1>SNACKS</h1>
          <div className={style.itemcontainer2}>
            {!data.snacks
              ? "Loading"
              : data.snacks.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div id="BEVERAGES">
          <h1>BEVERAGES</h1>
          <div className={style.itemcontainer2}>
            {!data.drinks
              ? "Loading"
              : data.drinks.map((ele, index) => (
                  <div key={index}>
                    <img src={ele.img_url} alt={ele.name} width="100%" />
                    <h2>
                      <b>{ele.name}</b>
                    </h2>
                    <h2>
                      <b>{ele.price}</b>
                    </h2>
                    <h2>
                      <span>&#9679;</span>
                      {ele.category} &#9679; {ele.serves}
                    </h2>

                    <h2>{ele.description}</h2>
                    <button className={style.addtocart} onClick={onOpen}>
                      Add to Cart &nbsp;
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        alt="*"
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
