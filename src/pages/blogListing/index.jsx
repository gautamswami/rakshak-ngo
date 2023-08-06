import React from "react";
import { BiCalendar } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { useLanguage } from "../../Context/ThemeContext";
import ArticleHeader from "../../components/articleHeader";
import "./bloglisting.css";
import { useNavigate } from "react-router-dom";

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
export default function BlogListing() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/blogdetail");
  };
  return (
    <div className="blogs_maincontainer">
      <ArticleHeader />
      <div>
        <div className="Toppadding"></div>
        <div className="Topflex">
          <div className="LeftSide">
            <div className="imgcolor Toprightimg">
              <img src="./imagesample.avif" />
              <div className="topcarddetailsDiv">
                <div className="cardCategoryTag">देशहित</div>
                <h1>Post-Apocalyptic Tendencies in 2021 Games designs</h1>
                <div className="flexDetailDiv bgTransparent">
                  <span> BY DAVID</span>
                  <span> AUG 15,2023</span>
                  <span> 0 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="RightSide">
            <div className="TopGrid">
              {[0, 1, 2, 3].map((data) => {
                return (
                  <div className="Card">
                    <div className="imgcolor Topleftimg">
                      <img src="./imagesample.avif" />
                      <div className="topcardSmalldetailsDiv">
                        <div className="cardCategoryTag">देशहित</div>
                        <h1>
                          Post-Apocalyptic Tendencies in 2021 Games designs
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              {Datails?.map((name, id) => {
                return (
                  <div
                    className="MainCard"
                    key={`card-${id}`}
                    onClick={handleRedirect}
                  >
                    <div className="cardCategoryTag">देशहित</div>
                    <div className="CardImg">
                      <img src={name.img} className="Cardimgs" />
                    </div>
                    <div className="CardDetails">
                      <p> {name.Title}</p>
                      <div className="flexDetailDiv">
                        <div>
                          {" "}
                          <CiUser />
                          {name.Name}
                        </div>
                        <div>
                          {" "}
                          <BiCalendar />
                          {name.Date}
                        </div>
                      </div>
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
