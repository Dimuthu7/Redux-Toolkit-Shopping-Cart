import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../style/cart.css'
import { CartItem } from '../components/CartItem';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { uiActions } from '../redux-store/uiSlice';
import { cartAction } from '../redux-store/cartSlice';

export const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.itemsList);
  const totalPrice = useSelector(state => state.cart.total);
  const subTotalPrice = useSelector(state => state.cart.subTotal);

  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    dispatch(uiActions.setShowCart(false));
  };

  const btnProceed = () => {
    dispatch(cartAction.cartProceed());
    toggle();
  }

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop="static"
        centered={true}
        fullscreen="xl"
        size="lg"
        className="modal-cart"
      >
        <ModalHeader toggle={toggle}>
          Shopping Cart{" "}
          <span className="ms-2" style={{ fontSize: "1.3rem" }}>
            <AiOutlineShoppingCart />
          </span>
        </ModalHeader>
        <ModalBody className="modal-body">
          <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 py-2">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  {cartItems.length === 0 && (
                    <span>
                      <b>No Item Found !</b>
                    </span>
                  )}
                  {cartItems.map((item) => (
                    <CartItem
                      name={item.name}
                      quantity={item.quantity}
                      total={item.total}
                      price={item.price}
                      id={item.id}
                      img={item.img}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
          <div className="row" style={{ width: "25vw" }}>
            {cartItems.length > 0 && (
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                      Subtotal
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="text-muted" style={{ fontSize: "1.1rem" }}>
                      LKR{" "}
                      {subTotalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                      Total(Incl. taxes)
                    </span>
                  </div>
                  <div className="col-6">
                    <span
                      className="fw-bold text-muted"
                      style={{ fontSize: "1.2rem" }}
                    >
                      LKR{" "}
                      {totalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row mt-3">
                  <div className="col-6">
                    <Button color="primary" onClick={btnProceed} className="w-100">
                      Proceed
                    </Button>
                  </div>
                  <div className="col-6">
                    <Button
                      color="secondary"
                      onClick={toggle}
                      className="w-100"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}
