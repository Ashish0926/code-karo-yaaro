import React from "react";
import styles, { layout } from "../style";
import { ai } from "../assets";

const AI = () => {
  return (
    <div>
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            {" "}
            Introducing
            <br className="sm:block hidden" /> Artificial Intelligence And
            Machine Learning
          </h2>
          <p className={`${styles.heading3} max-w-full mt-5`}>
              Take The Next Step Toward Your Personal & Professional Goals With
              Us Make your career with a world class learning experience
            </p>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={ai}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI;
