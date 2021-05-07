// import React from "react";
import React, {useCallback, useState, useMemo} from "react";
import "./Timeline.css";
import RangeSlider from "./RangeSlider";
import RangeSlider2 from "./Hello";

export default function Timeline() {
  const [parentVal, setParentVal] = useState(10);
  const [parentVal2, setParentVal2] = useState(10);

  const sliderValueChanged = useCallback((val) => {
    setParentVal(val);
  });

  const sliderProps = useMemo(() => ({
    min: 0.99,
    max: 100,
    value: parentVal,
    step: 0.25,
    label: "This is a reusable slider",
    onChange: (e) => sliderValueChanged(e),
  }));

  const sliderValueChanged2 = useCallback((val) => {
    setParentVal2(val);
  });

  const sliderProps2 = useMemo(() => ({
    min: 0.99,
    max: 100,
    value: parentVal2,
    step: 0.25,
    label: "This is a reusable slider",
    onChange: (e) => sliderValueChanged2(e),
  }));

  return (
    <div>
      <Slider
        defaultValue={value}
        step={2}
        onChange={this.onChange}
        wrapperClassName={styles.slider}
        trackClassName={styles.sliderTrack}
        handleClassName={styles.sliderHandle}
      />
      <h1>PARENT VALUE: {parentVal}</h1>
      <RangeSlider {...sliderProps} classes="additional-css-classes" />
      {/* <h1>PARENT VALUE: {parentVal2}</h1> */}
      {/* <RangeSlider2 {...sliderProps2} classes="additional-css-classes" /> */}
    </div>
  );
  // <div class="main-container">
  //   <section id="timeline" class="timeline-outer">
  //     <div class="container" id="content">
  //       <div class="row">
  //         <div class="col s12 m12 l12">
  //           <h1 class="blue-text lighten-1 header">
  //             Responsive Material Design Timeline
  //           </h1>
  //           <ul class="timeline">
  //             <li class="event" data-date="2015/Present">
  //               <h3>Invicta Watch Corp. Staten Island, New York Assistant</h3>
  //               <p>
  //                 Manager 10/2018 – 10/2019 Acquired and maintained an astute
  //                 knowledge of all products and promotions being offered.
  //                 Cultivated a good rapport with other staff members and
  //                 customers. Managed staff and delegated tasks and
  //                 responsibilities to other staff members. Ensured a clean
  //                 store consistently for good customer experience. Oversaw
  //                 opening and closing procedures, handled cash and deposits.
  //                 Achieved and exceeded selling goals for continuous
  //                 improvement. Utilized top notch communication and
  //                 troubleshooting skills.
  //               </p>
  //             </li>
  //             <li class="event" data-date="2015/Present">
  //               <h3> Victra / A - Wireless Staten Island, New York Sales</h3>
  //               <p>
  //                 Associate 02/2016- 09/2018 Provided hands on customer
  //                 service and technical assistance within the store. Had
  //                 responsibility for opening and closing procedures, handling
  //                 cash and credit cards, helping to train new staff, achieving
  //                 sales goals consistently, and maintaining a clean store for
  //                 customer experience.
  //               </p>
  //             </li>
  //             <li class="event" data-date="2012/2015">
  //               <h3> Flatiron School 02/ 2020 - 10/2020</h3>
  //               <p>
  //                 Throughout my degree I have gained expansive knowledge of
  //                 informatics areas including Human Computer Interaction,
  //                 Multimedia Design and Development, Program Analysis and
  //                 Design For my final year project, I created a 2D Puzzler
  //                 Game for iOS called 'Flat Ball' and received a first. I
  //                 therefore hope to release this game and further develop it
  //                 to add new levels and improve the features.
  //               </p>
  //             </li>
  //             <li class="event" data-date="2012/2015">
  //               <h3>1108 Studios</h3>
  //               <p>
  //                 This is a small startup that a friend and I created to gain
  //                 more skills and apply those I had learned while completing
  //                 my diploma. Since its inception, as a front - end web
  //                 developer I have advised, designed and built web solutions
  //                 for numerous clients.
  //               </p>
  //             </li>
  //             <li class="event" data-date="2010/2012">
  //               <h3>IT Practitioners BTEC National Diploma</h3>
  //               <p>
  //                 This is where my interest in building things for interactive
  //                 media began. During my first computing course I studied a
  //                 range of core topics including multimedia design, database
  //                 design, computer games development, computer networks and
  //                 object oriented programming.
  //               </p>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  //   {/* <a class="portfolio-link" target "_blank" href="http://www.erpik.com"><h6>www.erpik.com</h6></a> */}
  //   <br />
  // </div>
}
