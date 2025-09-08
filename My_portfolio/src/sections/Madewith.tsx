import Sec_Header from "@/components/Sec_Header";
const Madewith = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <Sec_Header
          eyebrow="Made With Focus"
          title="Behind This Project"
          description="Behind every scroll lies not just skills, but a story of growth, curiosity, and creation."
        />
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-around  lg:mx-40 md:mx-30 mx-10 lg:mt-28 md:mt-28 mt-20 lg:gap-0 md:gap-0 gap-12">
        {/* technology */}
        <div >
          <h3 className="lg:text-2xl md:text-2xl text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Techstack</h3>
          <ul className="list-none">
            <li>~ Next js</li>
            <li>~ Tailwind Css</li>
            <li>~ Framermotion</li>
          </ul>
        </div>
        {/* refarence */}
        <div className="flex flex-col items-start text-start">
          <h3 className="lg:text-2xl md:text-2xl text-xl font-bold mb-6 text-start bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Tools</h3>
          <ul className="list-none">
            <li>~ Tmux</li>
            <li>~ Neovim</li>
            <li>~ Lazygit</li>
            <li>~ Lazydocker</li>
            <li>~ Zen</li>
            <li>~ Inkscape</li>
            <li>~ Blender</li>
            <li>~ Gimp</li>
            <li>~ Figma</li>
            <li>~ Vercel</li>
          </ul>
        </div>
        {/* songs */}
        <div className="flex flex-col items-start text-start">
          <h3 className="lg:text-2xl md:text-2xl text-xl  font-bold mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Songs</h3>
          <ul className="list-none">
            <li>~ Die with a Smile</li>
            <li>~ Birds of a Feather</li>
            <li>~ Takedown</li>
            <li>~ One of the Girls</li>
            <li>~ Golden</li>
            <li>~ Cry For Me</li>
            <li>~ Attention</li>
            <li>~ Cry For Me</li>
            <li>~ Blinding light</li>
            <li>~ Shivers</li>
          </ul>
        </div>
        {/* tools */}
        <div className="flex flex-col items-start text-start">
          <h3 className="lg:text-2xl md:text-2xl text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Others</h3>
          <ul className="list-none">
            <li>~ +26 cups of coffee</li>
            <li>~ Endless references</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Madewith
