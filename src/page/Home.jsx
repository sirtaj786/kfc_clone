import React from 'react'
import style from "./Home.module.css";
import axios from 'axios';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link, useNavigate} from "react-router-dom"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  const { isOpen, onOpen ,onClose} = useDisclosure()
  const [data,setData]=useState([])
  const [card,setCard]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    axios.get("https://kfc-ykp5.onrender.com/homedata").then(function(res){
    setData(res.data)
      
    })
    
  }, [])
  console.log("data",data)
  useEffect(()=>{
    axios.get("https://kfc-ykp5.onrender.com/Dealcard").then(function(res1){
    setCard(res1.data)
  })
  },[])

  const handleclick=()=>{
    navigate("/menu")
  }
  
  return (
    <div>
      <div>
        <div style={{ width: "fit-content", margin: "auto" }}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
            alt="stripes"
          />
        </div>
        <div style={{ fontWeight: "700", fontSize: "20px", marginTop: "25px" }}>
          SELECT YOUR ORDER TYPE TO START
        </div>
        <div
          style={{
            height: "50px",
            width: "380px",
            backgroundColor: "#e3e3e3",
            display: "flex",
            color: "#494949",
            margin: "auto",
            borderRadius: "20px",
            justifyContent: "space-evenly",
            marginTop: "30px",
          }}
        >
          <button
            onClick={onOpen}
            style={{
              color: "#494949",
              backgroundColor: "transparent",
              padding: "15px",
              border: 0,
              borderRadius: "20px 0px 0px 20px",
              fontWeight: "700",
            }}
          >
            DELIVERY
          </button>
          <button
            onClick={onOpen}
            style={{
              color: "white",
              width: "135px",
              border: 0,
              backgroundColor: "#E4002B",
              padding: "0px 20px 0px 20px",
              margin: "4px 0px 4px 0px",
              borderRadius: "20px",
              fontWeight: "700",
            }}
          >
            PICK UP
          </button>
          <button
            onClick={onOpen}
            style={{
              color: "#494949",
              border: 0,
              backgroundColor: "transparent",
              padding: "15px",
              borderRadius: "0px 20px 20px 0px",
              fontWeight: "700",
            }}
          >
            DINE IN
          </button>
        </div>
      </div>
      <div className={style.slider}>
        <Carousel
          autoPlay={true}
          interval="5000"
          transitionTime="500"
          showThumbs={false}
          showArrows={false}
           
        >
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=958&fit=fill&fm=webp"
              alt=" "
            />
          </div>

          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/996c91ae970f53a25b6bba8036f97aff/Biryani_Banner_1440x396px.jpg?w=930&fit=fill&fm=webp"
              alt=" "
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0872e046c202005f49e6c94489c8ce40/4Value_Burger_1440x396px.png?w=930&fit=fill&fm=webp"
              alt=" "
            />
          </div>
        </Carousel>
      </div>
      <div>
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
                 <Link to="/menu"><button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    borderRadius: "20px",
                    padding: "10px 90px 10px 90px",
                    marginTop: "20px",
                  }}
                >
                  Pick up
                </button></Link>
                <Link to="/menu"><button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    borderRadius: "20px",
                    padding: "10px 90px 10px 90px",
                    marginTop: "20px",
                  }}
                >
                  Dine In
                </button></Link>
                <Link to="/menu"><button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    borderRadius: "20px",
                    padding: "10px 90px 10px 90px",
                    marginTop: "20px",
                  }}
                >
                  Delivery
                </button></Link>
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
      </div>
      <div className={style.welcomebox}>
        <div className={style.welcomebox1}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
            alt="stripes"
          />
        </div>
        <div className={style.welcomebox2}>WELCOME TO KFC!</div>
      </div>
      <div className={style.menuContainer}>
        <div className={style.browesParent}>
          <h2 className={style.browse}>BROWSE CATEGORIES</h2>
          <hr style={{ border: "1px solid #e3e3e3", width: "75%" }}></hr>
        </div>
        <div className={style.dataParent}>
          {data.map((data) => (
            <div  key={data.image}onClick={handleclick}className={style.datachild}>
              <div style={{ width: "100%", height: "68%" }}>
                <img
                  style={{
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    width: "100%",
                    height: "100%",
                  }}
                  src={data.image}
                  alt=""
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f8f7f5",
                  paddingTop: "8%",
                  paddingBottom: "8%",
                  borderBottomRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  fontWeight: "800",
                }}
              >
                {data.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.offerbody}>
        <div className={style.stripe}>
          <img
            style={{ height: "35px" }}
            src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
            alt="stripes"
          />
        </div>
        <div className={style.stripe1}>
          <h1 style={{ fontSize: "30px", fontWeight: "800" }}>
            OFFERS & DEALS
          </h1>
          <Link to="/deals"><p style={{ fontSize: "15px" }}>View All Deals</p></Link>
        </div>
        <div className={style.cardContainer}>
          {card.map((carddata) => (
          <div className={style.cardchild}>
              <div>
                <img
                  style={{
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                  src={carddata.image}
                  alt=""
                />
              </div>
              <div
                style={{ color: "red", fontSize: "20px", fontWeight: "700" }}
              >
                {carddata.title}
              </div>
              <div style={{ color: "black" }}>{carddata.discription}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  color: "black",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  backgroundColor: "#f8f7f5",
                  borderBottomLeftRadius:"5px",
                  borderBottomRightRadius:"5px"
                }}
              >
               <div className={style.carddetail}>View Details</div>
                <button className={style.cardbutton}>Redeem</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home