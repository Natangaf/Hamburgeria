import { PrincipalImage } from "../../assets/img";
import { FigurePrincipal, MainDashboard, PrincipalImg } from "./_home";
import ContainerComponent from "./../../components/ContainerComponent/ContainerComponent";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <MainDashboard data-com="MainDashboard">
      <FigurePrincipal data-com="FigurePrincipal">
        <PrincipalImg data-com="PrincipalImg" src={PrincipalImage} alt="" />
      </FigurePrincipal>
      <ContainerComponent gap={0}>
        <Search/>
      </ContainerComponent>
    </MainDashboard>
  );
};

export default Home;
