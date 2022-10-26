import { Helmet } from "react-helmet-async";
import Suggestioncard from "../components/Home/Suggestioncard";
import HowItWork from "../components/Home/HowItWork";
import Hero from "../components/Home/Hero";
import CardProject from "../components/Home/CardProject";

export default function Home() {
  return (
    <div className="relative">
      <Helmet>
        <title>We Rev&apos;Art | Home </title>
      </Helmet>
      <Hero />
      <Suggestioncard />
      <HowItWork />
      <CardProject />
      <div className="mobile">
        <h2>
          Ce site n&apos;a pas vocation a être utilisé sur un téléphone mobile.
        </h2>
        <p>Nous vous invitons à le visiter à nouveau depuis un ordinateur.</p>
      </div>
    </div>
  );
}
