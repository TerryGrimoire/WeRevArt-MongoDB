import { Helmet } from "react-helmet-async";
import Suggestioncard from "../components/Suggestioncard";
import HowItWork from "../components/HowItWork";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";

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
