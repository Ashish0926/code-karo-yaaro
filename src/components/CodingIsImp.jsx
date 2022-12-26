import styles, { layout } from "../style";
import { coding1, coding2, coding3, coding4, coding5, coding6, coding7 } from "../assets";

const FeatureCard = (props) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={props.icon} alt="" className="w-[150px] h-[100px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {props.content}
    </p>
  </div>
);

const CodingIsImp = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What is the <br className="sm:block hidden" /> Importance of Coding ?
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Coding is a list of step-by-step instructions that get computers to do what you want them to do.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <FeatureCard icon={coding5} content="Coding gives your child a competitive edge" />
      <FeatureCard icon={coding6} content="Coding improves problem-solving skills" />
      <FeatureCard icon={coding3} content="Coding teaches persistence" />
      <FeatureCard icon={coding2} content="Coding improves creativity" />
    </div>
  </section>
);


export default CodingIsImp;
