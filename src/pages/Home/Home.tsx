import { PrincipalImage } from "../../assets/img";
import {
  Cards,
  Containerimage,
  FigurePrincipal,
  ImageCards,
  MainDashboard,
  NavCards,
  PrincipalImg,
} from "./_home";
import ContainerComponent from "./../../components/ContainerComponent/ContainerComponent";
import Search from "../../components/Search/Search";
import { database } from "./../../../teste";

const Home = () => {

  
  return (
    <MainDashboard data-com="MainDashboard">
      <FigurePrincipal data-com="FigurePrincipal">
        <PrincipalImg data-com="PrincipalImg" src={PrincipalImage} alt="" />
      </FigurePrincipal>
      <ContainerComponent gap={0}>
        <Search />
        <NavCards>
          {database.sections.map(({ id, images, name }) => {
            return (
              <Cards key={id}>
                <Containerimage>
                  <ImageCards src={images[0].image} alt={name} />
                </Containerimage>
                <p>{name}</p>
              </Cards>
            );
          })}
        </NavCards>
      </ContainerComponent>
    </MainDashboard>
  );
};

export default Home;
