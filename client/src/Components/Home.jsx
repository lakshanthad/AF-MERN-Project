// import React from "react";

import "./css/responsive.css";
import "./css/style.css";
import "./css/bootstrap.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      <div className="hero_area">
        <section className="slider_section position-relative">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover
          >
            <div className="carousel_item">
              <div className="container">
                <div className="box">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <div>
                          <h1>Agricultural Data</h1>
                          <h4>
                            Agricultural data related to Sabaragamuwa Province.
                          </h4>
                          <div className="">
                            <a href="">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="img-box">
                        <img src="./Assets/homePage/plant.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_item">
              <div className="container">
                <div className="box">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <div>
                          <h1>Animal Data</h1>
                          <h4>Animal data related to Sabaragamuwa Province.</h4>
                          <div className="">
                            <a href="">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="img-box">
                        <img src="./Assets/homePage/cow.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
      </div>

      <section className="how_section layout_padding">
        <div className="heading_container">
          <h2>Articles</h2>
        </div>
        <div className="how_container">
          <a href="#" style={{ textDecoration: "none" }}>
            <div className="box">
              <div className="img-box">
                <img
                  src="../Assets/homePage/harvest.png"
                  style={{ height: "512", width: "512" }}
                />
              </div>
              <div className="detail-box">
                <h5 style={{ textDecoration: "none" }}>Agricultural Articles</h5>
                <p style={{ textDecoration: "none" }}>
                  Read the latest articles published on agriculture and farming
                  in Sabaragamuwa Province.
                </p>
              </div>
            </div>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <div className="box">
              <div className="img-box">
                <img src="../Assets/homePage/livestock.png" />
              </div>
              <div className="detail-box">
                <h5>Animal and Farm Articles</h5>
                <p>
                  Read the latest articles published on animal production and
                  health in Sabaragamuwa Province.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

{
  /* 
 <script type="text/javascript">
   $(".owl-carousel").owlCarousel({
     loop: true,
     margin: 0,
     navText: [],
     center: true,
     autoplay: true,
     autoplayHoverPause: true,
     responsive: {
       0: {
         items: 1
       },
       1000: {
         items: 3
       }
     }
   });
 </script> */
}
