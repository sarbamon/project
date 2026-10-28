
const skills =[
  "HTml"
]
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="navbar">
        <a href="">home</a>
        <a href="">about</a>
        <a href="#porfolio">porfolio</a>
      </div>

      <div className="hero">
        <section id="about">
          <h2>hello i am a dev</h2>
          <body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci blanditiis tempore culpa eius, facilis nihil ipsum ab. Consequatur ducimus, quod incidunt accusantium vitae alias quos natus sit veniam quidem!
          </body>
        </section>

        <section id="porfolio">
          <h2>
            <li>html</li>
            <li>css</li>
            <li>Javascript</li>
          </h2>
        </section>
      </div>
    </div>
  );
}
