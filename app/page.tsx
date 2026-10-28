
export default function Home() {
  return (
    <div className="all">
      <div className="navbar">
        <a href="">home</a>
        <a href="">about</a>
        <a href="#porfolio">porfolio</a>
      </div>

      <div className="main">
        <section id="about" className="about">
          <h2>hello i am sarbamon and i am a developer</h2>
          <body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci blanditiis tempore culpa eius, facilis nihil ipsum ab. Consequatur ducimus, quod incidunt accusantium vitae alias quos natus sit veniam quidem!
          </body>
        </section>

        <section id="porfolio" className="skils">
          <h2>
            <h5 className="header">Skils</h5>
            <li>html</li>
            <li>css</li>
            <li>Javascript</li>
          </h2>
        </section>
      </div>
    </div>
  );
}
