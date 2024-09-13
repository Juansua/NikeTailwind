import Button from "../components"
import arrowRight from "../assets/icons"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col border-2 max-container justify-center min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>This is a plain text because I don't want to use a real one please forgive me thanks to all of you guys.</p>
        <Button label="Shop Now" iconURL = { arrowRight } />
      </div>
    </section>
  )
}

export default Hero