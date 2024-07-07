import anime from "animejs";
import melew from "../assets/melataw.jpg";
import Testimonials from "../components/Testimonials";




const Header = () => {
  return (
    <div className="relative grid place-content-center bg-slate-950 py-11">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 50;
const GRID_HEIGHT = 13;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div>
      <div className=" relative flex flex-col items-center justify-center">
        <div
          onClick={handleDotClick}
          style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
          className="grid w-fit z-20"
        >
          {dots}
        </div>
        <div className=" absolute top-0 z-50 h-full flex items-center flex-col justify-center">
          <h2 className="z-50 text-6xl text-[#0AE585]">About Us</h2>
          <br/>
          <p className="text-sm font-extralight mb-2">We provide the best development environment for passionate engineers so that we</p>
          <p className="text-sm font-extralight mb-2">can solve complex and <b className="text-[#0AE585]">Bereket likes suking DICK!!!</b></p>
        </div>
      </div>
      
    </div>
    
  );

};
const About = ()=>{
  return(
    <div>
      <Header/>
      <br/><br/><br/>
      <div className="flex items-center gap-14 px-14">
        <div>
          <p className="text-sm font-thin mb-2">Our Company</p>
          <h2 className="text-4xl text-[#0AE585] mb-2">We Provide Expert Development Service All Over The World</h2>
          <p className="text-xs mb-2">We are passionate teams of engineers striving to solve intractable business problems in creative and pragmatic ways.</p>
          <p className="text-xs mb-2">We believe meaningful value can be provided through long-term commitment. We don’t want to be an extension of your team, we strive to be a part of it, sharing your vision.</p>
          <p className="text-xs mb-2">We take on business challenges, learn lessons, do self-improving, and always move forward to rise above them. Two things we value are ensuring a cultivating environment for our teams and the satisfaction of our clients.</p>
        </div>
        <div>
          <img src={melew} alt="" className="rounded shadow-xl"/>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <div>
        <Testimonials/>
      </div>
    </div>
  )
}

export default About;
