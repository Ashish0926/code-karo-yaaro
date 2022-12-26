import styles from "../style";
import { coding, coding1,robot } from "../assets";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={coding} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            {/* <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account */}
            CODERS TODAY, TECH-LEADERS TOMORROW
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {/* The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "} */}
            <span className="text-gradient">India's</span> First Online School Of
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Computer Science
        </h1>
        <p className={`${styles.heading3} max-w-[470px] mt-5`}>
        Enter the World Of Coding by enrolling in our coding school today!
        <br/>
        <br />
        "In Every Kid, there is a power to change the world"
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={coding1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
