import React from "react";
import { useLanguage } from "../../Context/ThemeContext";
import "./bloglisting.css";

export default function BlogListing() {
  const { language } = useLanguage();

  const Datails = [
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
    {
      Title: "Moster Jam Titans Success",
      Name: "DAVID",
      Date: "AUG 08, 2022",
      img: "./imagesample.avif",
    },
  ];

  return (
    <div>
      BlogListing{language}
      <div>
        <div className="Toppadding"></div>
        <div className="Topflex">
          <div className="LeftSide">
            <img src="./imagesample.avif" className="imgcolor Toprightimg" />
            <div className="topcarddetails">hello</div>
          </div>
          <div className="RightSide">
            <div className="TopGrid">
              <div className="Card">
                <img src="./imagesample.avif" className="Topleftimg" />
              </div>
              <div className="Card">
                <img src="./imagesample.avif" className="Topleftimg" />
              </div>
              <div className="Card">
                <img src="./imagesample.avif" className="Topleftimg" />
              </div>
              <div className="Card">
                <img src="./imagesample.avif" className="Topleftimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="SecondPart">
          <div className="nrmlFlex">
            <div className="border"></div>
            <div className="Heading">Featured Blogs</div>
            <div className="border2"></div>
          </div>
          <div className="Topflex">
            <div className="DownGrid">
              {Datails?.map((name) => {
                return (
                  <div className="MainCard">
                    <div className="CardImg">
                      <img src={name.img} className="Cardimgs" />
                    </div>
                    <div className="CardDetails">
                      <div> {name.Title}</div>
                      <div> {name.Name}</div>
                      <div> {name.Date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
