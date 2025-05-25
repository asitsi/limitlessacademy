"use client"
import Heading from '@/component/heading/Heading'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


const Portfolio = () => {
  // const [selected, setSelected] = React.useState("photos");

  return (
    <>
      <Heading text={"PORTFOLIO"} />
      <div className='container bg-black'>
        <p className='content_paragraph text-5xl text-foreground'>Explore our portfolio of excellence at Limitless Cricket Academy, where your success stories come to life. From budding athletes to seasoned pros, we highlight the achievements and journeys of those who’ve excelled with our support. Discover how we’ve helped elevate cricket careers through dedication, passion, and expertise.</p>
        <div className="image-grid">
          {Data.map((elem, index) => {
            const { image, compImg } = elem;
            return (
              <div key={index}>
                <Image
                  alt="Card background"
                  className="z-0 w-[100%] !h-[400px] contain"
                  fallbackSrc={compImg}
                  src={image}
                  height={1440}
                  width={1080}
                  style={{height: '600px', width: '100%'}}
                />
              </div>
            )
          })}
        </div>
      </div >
    </>
  )
}

export default Portfolio;


const Galery = () => {
  const [item, setItem] = React.useState(Data);
  const filterItem = (catItem: string) => {
    const updateItem = Data.filter((currentItem) => {
      return currentItem.category === catItem;
    });
    setItem(updateItem);
  };

  return (
    <div>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {item.map((elem, index) => {
          const { image } = elem;
          return (
            <div
              className="col-12 col-md-6 col-lg-6 col-xl-4"
              key={index}
            >
                <Image
                  isZoomed
                  width={240}
                  alt="NextUI Fruit Image with Zoom"
                  src={image}
                  className=''
                />
            </div>
          );
        })}
      </div>
    </div>
  )
}

const Data = [
  {
    id: 1,
    image: "/assets/image1.webp",
    compImg: "/assets/com_image1.webp",
    category: "CLUB",
  },
  {
    id: 2,
    image: "/assets/image2.webp",
    compImg: "/assets/com_image1.webp",
    category: "SHOP",
  },
  {
    id: 3,
    image: "/assets/image3.webp",
    compImg: "/assets/com_image1.webp",
    category: "CLUB",
  },
  {
    id: 4,
    image: "/assets/image4.webp",
    compImg: "/assets/com_image1.webp",
    category: "CLUB",
  },
  {
    id: 5,
    image: "/assets/image5.webp",
    compImg: "/assets/com_image1.webp",
    category: "CLUB",
  },
];