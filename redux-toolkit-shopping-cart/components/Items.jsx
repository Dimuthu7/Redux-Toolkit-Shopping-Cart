import React from 'react'
import { Item } from './Item';
import IMAGES from '../assets/Images'

export const Items = () => {

  const DUMMY_ITEMS = [
    {
        id: 1,
        name: "HYPERX PULSEFIRE SURGE",
        price: 23000,
        img: [IMAGES.image1]
    },
    {
        id: 2,
        name: "LOGITECH LIFT VERTICAL",
        price: 20000,
        img: [IMAGES.image2]
    },
    {
        id: 3,
        name: "DELL 610M Lunarli",
        price: 15000,
        img: [IMAGES.image3]
    },   
    {
        id: 4,
        name: "LOGITECH G502 HERO",
        price: 17000,
        img: [IMAGES.image4]
    },
  ]

  return (
    <>
      <div className="container">
        <div className="row">
            {DUMMY_ITEMS.map((item, index) => (
                <div className="col-md-3 col-sm-12" key={index}>
                    <Item
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                    />
                </div>
            ))}

        </div>
      </div>
    </>
  );
}
