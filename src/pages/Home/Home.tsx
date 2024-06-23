import { PrincipalImage } from "../../assets/img";
import {
  BoxShadowCart,
  BoxShadowStoreItems,
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
import { database } from "../../teste";
import { ISection } from "../../types/types";
import StoreItemsList from "../../components/StoreItems/StoreItems";
import Cart from "../../components/Cart/Cart";


const Home = () => {
  return (
    <>
      <FigurePrincipal data-com="FigurePrincipal">
        <PrincipalImg data-com="PrincipalImg" src={PrincipalImage} alt="" />
      </FigurePrincipal>
      <ContainerComponent gap={0}>
        <Search />
        <MainDashboard data-com="MainDashboard">
          <BoxShadowStoreItems>
            <NavCards>
              {database.sections.map(({ id, images, name }: ISection) => {
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
            {database.sections.map((section) => (
              <StoreItemsList {...section} key={section.id} />
            ))}
          </BoxShadowStoreItems>
          <BoxShadowCart>
            <Cart />
          </BoxShadowCart>
        </MainDashboard>
      </ContainerComponent>
    </>
  );
};

export default Home;
