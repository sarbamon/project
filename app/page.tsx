
export default function Home() {
  return (
    <div className="all">
      <div className ="flex item-center justify-between bg-white px-6 py-5 shadow-s md:px-12">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="#porfolio">Porfolio</a>
        <a href="">Contact</a>
      </div>

      <div className="main">
        <section id="about" className="about">
          <h2>hello i am sarbamon and i am a developer 
            <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat et quos molestiae enim quasi, modi earum repudiandae deserunt, consequuntur totam dicta quibusdam autem quis hic quidem sunt. Dolorem, commodi!</h2>
        </section>

        <section id="porfolio" className="skils">
          <h2>
            <h5 className="header">Skils</h5>
            <li>html</li>
            <li>css</li>
            <li>Javascript</li>
            <li>python</li>
          </h2>
        </section>

          <div>
            
          </div>
      </div>
    </div>
  );
}
