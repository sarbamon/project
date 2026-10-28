// import {useState} from "react";
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
        <div className="mx-0">
  <form className="w-full max-w-sm mx-auto ">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      sent
    </button>
  </div>
</form>
</div>
      </div>
    </div>
  );
}
