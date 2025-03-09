import Header from "@/componetnts/index/header2";
import Widget from "@/componetnts/index/widget";
import Gallery from "@/componetnts/index/ansologyofprojects"
import Parallax from "@/componetnts/index/parallax";
import Factories from "@/componetnts/archive/factories";
import Services2 from "@/componetnts/index/services2";
import Costumer from "@/componetnts/index/Costumers";
import Slogan from "@/componetnts/index/slogan";
import PopularServices from "@/componetnts/index/popularServices";
import Equipments from "@/componetnts/index/equipments";
import Articles from "@/componetnts/index/articles";

export default function Home() {
  return (
    <div className=" w-[100vw] flex flex-col items-center">
      <Header/>
      <Slogan/>
      <Widget/>
      <PopularServices/>
      <Gallery/>
      <Equipments/>
      <Services2/>
      <Parallax/>
      <Costumer/>
      <Articles/>
    </div>
  );
}
