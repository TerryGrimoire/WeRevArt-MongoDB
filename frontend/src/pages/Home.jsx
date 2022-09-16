import { Helmet } from "react-helmet-async";
import Suggestioncard from "../components/Home/Suggestioncard";
import HowItWork from "../components/Home/HowItWork";
import Hero from "../components/Home/Hero";
import CardProject from "../components/Home/CardProject";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Home </title>
      </Helmet>
      <Hero />
      <Suggestioncard />
      <HowItWork />
      <CardProject />
    </div>
  );
}
