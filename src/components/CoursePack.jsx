import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import styles from "../style";
import { layout } from "../style";

const PriceCard = (props, { points }) => {
  return (
    <div class="w-full m-2 max-w-sm p-4 rounded-lg shadow-md sm:p-8 bg-white bg-opacity-20 backdrop-blur-lg">
      <h5 class="mb-4 text-xl font-poppins text-white">{props.title}</h5>
      <div class="flex items-baseline text-white">
        <span class="text-5xl font-extrabold tracking-tight">{`₹ ${props.price}`}</span>
      </div>
      <ul role="list" class="space-y-5 my-7">
        <li class="flex space-x-3">
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            * Course fees is not refundable once paid
          </span>
        </li>

        <li class="flex space-x-3">
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5 text-cyan-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {props.point1}
          </span>
        </li>
        <li class="flex space-x-3">
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5 text-cyan-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {props.point2}
          </span>
        </li>
        <li class="flex space-x-3">
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5 text-cyan-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {props.point3}
          </span>
        </li>
        <li class="flex space-x-3">
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5 text-cyan-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {props.point4}
          </span>
        </li>
        <li className={`flex space-x-3 ${props.styles}`}>
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5 text-cyan-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {props.point5}
          </span>
        </li>
      </ul>
      <button
        type="button"
        class="w-full h-14 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
      >
        Join the Course
      </button>
    </div>
  );
};

export default function Example() {
  const data = [
    {
      label: "Grade 1-4",
      value: "1",
      desc: (
        <div className="flex flex-wrap sm:justify-start w-full feedback-container justify-between relative z-[1]">
          <PriceCard
            title="Starter"
            price="5788 /-"
            point1="For 2 Months (3 Super Sessions Per Week)"
            point2="Learn To Code With Scratch, Critical Thinking, Animation With Fun, Logic Building, Block-based Coding"
            point3="Activities, 16+ Games / Animation Projects, Instant Quizzes"
            point4="Benefits like Boost Imagination, Improvement in Numerical Competence"
            styles="hidden"
          />
          <PriceCard
            title="Intermediate"
            price="10, 290 /-"
            point1="For 4 Months (3 Super Sessions Per Week)"
            point2=" Learn Creativity from Scratch, Explore Animation Effects, Game And App Development, Creating Basic Website"
            point3="Activities - 32+ Intermediate Level Games / Basic App Development And Interactive Quizzes"
            point4="Benefits like Imagine, Program And Get Creative With Coding"
            styles="hidden"
          />
          <PriceCard
            title="Professional"
            price="15, 434 /-"
            point1="For 6 Months (3 Super Sessions Per Week)"
            point2="Pro Coder Scratch, Advance Game Development With Effects, Foundation Of Web Design"
            point3="Activities - 48+ Advanced Games / App Development And Learn Styling Of Web Page"
            point4="Benefits - Fluent With Technologies, Urge To Implement Ideas And Improve Social Skills"
            point5="Mentorship - Cyber Olympiad Preparation
"
          />
        </div>
      ),
    },
    {
      label: "Grade 5-7",
      value: "2",
      desc: (
        <div className="flex flex-wrap sm:justify-start w-full feedback-container justify-between relative z-[1]">
          <PriceCard
            title="Starter"
            price="5788 /-"
            point1="For 2 Months (3 Super Sessions Per Week)"
            point2="Learn To Basics Of Coding, Understanding Of Algo’s, Utility Apps, Block-Based Coding"
            point3="Activities - 16+ Game/App Building Projects, Interactive Quizzes"
            point4="Benefits - Understanding Of Code Blocks, Structural Programming, Class Projects"
            styles="hidden"
          />
          <PriceCard
            title="Intermediate"
            price="10, 290 /-"
            point1="For 4 Months (3 Super Sessions Per Week)"
            point2=" Learn Sequencing And Complex Loop, Logic Structures, Utility Apps, Game Development, Static Webpage"
            point3="Activities - 32+ Game/App Building Projects, Interactive Quizzes"
            point4="Benefits - Boost Implementation, Creative Thinking, Become Problem Solver"
            styles="hidden"
          />
          <PriceCard
            title="Professional"
            price="15, 434 /-"
            point1="For 6 Months (3 Super Sessions Per Week)"
            point2="Learn Dynamic Website, App Development, Text Based Coding"
            point3="Activities - 48+ Advance Level App/Website Development, Interactive Quizzes and Language Based Project"
            point4="Benefits - Boost in Logical Thinking Skill, Enhancement in Algorithmic Thinking and Live Project"
            point5="Mentorship - Cyber Olympiad Preparation
"
          />
        </div>
      ),
    },

    {
      label: "Grade 8-10",
      value: "3",
      desc: (
        <div className="flex flex-wrap sm:justify-start w-full feedback-container justify-between relative z-[1]">
          <PriceCard
            title="Starter"
            price="5788 /-"
            point1="For 2 Months (3 Super Sessions Per Week)"
            point2="Learn Basics Of Web Design / Introduction To Python / Introduction To App Development"
            point3="Activities - Apps / Web Designing Projects, Interactive Quizzes, Mini Project"
            point4="Benefits - Work On Live Projects, Perseverance, Boost Creativity, Understanding Of Complex Loops, Improvement In Competitive Skills."
            styles="hidden"
          />
          <PriceCard
            title="Intermediate"
            price="10, 290 /-"
            point1="For 4 Months (3 Super Sessions Per Week)"
            point2=" Learn Work On Live Projects, Perseverance, Boost Creativity, Understanding Of Complex Loops, Improvement In Competitive Skills."
            point3="Activities - Interactive Website Building Projects / Interactive App, Interactive Quizzes, Course Project"
            point4="Benefits - Implementation Of Student Idea, Improve Problem Solving Skills, Learn To Create A Stuffs, Out Of Box Thinking"
            styles="hidden"
          />
          <PriceCard
            title="Professional"
            price="15, 434 /-"
            point1="For 6 Months (3 Super Sessions Per Week)"
            point2="Learn to Host Single Page Website / Python – GUI Programming / Publish Your App In Play Store"
            point3="Activities - Advance Level App / Website Designing & Development / Desktop Application With Python"
            point4="Benefits - Become Familiar with Graphic Design, Research Related To Web Usability, Design and Develop UI/UX"
            point5="Mentorship - Cyber Olympiad Preparation
"
          />
        </div>
      ),
    },
    {
      label: "Grade 10+",
      value: "4",
      desc: (
        <div className="flex flex-wrap sm:justify-start w-full feedback-container justify-between relative z-[1]">
          <PriceCard
            title="Starter"
            price="5788 /-"
            point1="For 2 Months (3 Super Sessions Per Week)"
            point2="Learn Foundations Of Data Science / Web Designing / Basics of Android"
            point3="Activities - Interpret And Communicate Data, Understanding Real World Problems, Fundamentals Of Website Development, Android Adventure"
            point4="Benefits - Improvement In Competitive Skills, Industry-Based Knowledge, Decision Making Skills"
            styles="hidden"
          />
          <PriceCard
            title="Intermediate"
            price="10, 290 /-"
            point1="For 4 Months (3 Super Sessions Per Week)"
            point2=" Learn Web Designing With Bootstrap / Introduction To JAVA / Analyzing And Visualization Of Data"
            point3="Activities - Form Designing With HTML/CSS And Bootstrap / JAVA For Android / Python Libraries"
            point4="Benefits - Rational Thinking, Critical Thinking And Improvement In Problem Solving"
            styles="hidden"
          />
          <PriceCard
            title="Professional"
            price="15, 434 /-"
            point1="For 6 Months (3 Super Sessions Per Week)"
            point2="Learn Expert Web Development With JavaScript / Android App Development / ML/AI"
            point3="Activities - Build Project From Scratch, Create App And Competitive Programing"
            point4="Benefits - Real Life Project Implementation, Smart Decision Making, Research And Data Analysis, Solving Complex Problems"
            point5="Mentorship - Cyber Olympiad Preparation
"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center`}>
          {" "}
          Admission Open For All Grades
        </h2>
        <p
          className={`${styles.heading3}  font-bold max-w-full mt-5 text-center mb-10`}
        >
          1 : 10 Live Interactive Classes
        </p>
      </div>
      <Tabs value="html">
        <TabsHeader className="bg-transparent">
          {data.map(({ label, value }) => (
            <Tab
              className="text-lg font-poppins font-semibold text-[20px]"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 550 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <div>
        <p
          className={`${styles.heading3}  font-bold max-w-full mt-10 text-center mb-10`}
        >
          1 : 1 Live Interactive Classes
        </p>
        <div className="flex flex-wrap sm:justify-start w-full feedback-container justify-between relative z-[1]">
          <PriceCard
            title="Starter"
            price="4, 250 /-"
            point1="Super 8 Sessions"
            point2="Introduction to Programming Languages"
            point3="Basic concepts of Scratch"
            point4="Programming/Block based coding/Web Designing"
            styles="hidden"
          />
          <PriceCard
            title="Intermediate"
            price="25, 133 /-"
            point1="Super 48 Sessions"
            point2="Introduction to Programming Languages"
            point3="Advance Scratch"
            point4="Programming/Block based coding/Website Development"
            styles="hidden"
          />
          <PriceCard
            title="Professional"
            price="40, 766 /-"
            point1="Super 96 Sessions"
            point2="Block Based Coding/Scratch Programming"
            point3="Games And App Development"
            point4="Project/Static And Dynamic Websites Building Projects"
            styles="hidden"            
          />
        </div>
      </div>
    </div>
  );
}
