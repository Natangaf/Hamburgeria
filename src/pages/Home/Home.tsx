import { PrincipalImage } from "../../assets/img";
import Header from "../../components/Header/Header";
import { FigurePrincipal, MainDashboard, PrincipalImg } from "./_home";
import ContainerComponent from "./../../components/ContainerComponent/ContainerComponent";

const Home = () => {
  return (
    <MainDashboard data-com="MainDashboard">
      <FigurePrincipal data-com="FigurePrincipal">
        <PrincipalImg data-com="PrincipalImg" src={PrincipalImage} alt="" />
      </FigurePrincipal>
      <ContainerComponent gap={0}>
        <a></a>
      </ContainerComponent>
    </MainDashboard>
  );
};

export default Home;
