import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>Some facts about me.</h1>
      <p>
        My biggest passion and point in my life is adventure. Pursuit for
        exploring and building new things brought me to college where I studied
        Technical Physics. This is where my connection with programming began. I
        met there the world of Front-end and Back-end development, but the first
        one caught my heart and it led me to the present moment in which I
        decided to build modern, beautiful and what most important useful
        websites and web applications. Here you can find a piece of my work. If
        you liked it and you want cooperating with me, feel free to{" "}
        <Link to="/contact">Contact me</Link>. Currently I'm looking for
        commercial job, where I could develop my programming skills and have fun
        with amazing people!
      </p>
    </div>
  )
}
export default AboutPage
