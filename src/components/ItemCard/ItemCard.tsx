import { IItem } from "../../types/types";
import {
  ConteinerCard,
  Description,
  DescriptionText,
  FigureCard,
  TitleText,
  ValueText,
} from "./_itemCard";

const ItemCard = ({ name, images, description, price }: IItem) => {
  return (
    <ConteinerCard>
      <Description>
        <TitleText>{name}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        <ValueText>R$ {price}</ValueText>
      </Description>
      {images && <FigureCard src={images[0].image} alt={name} />}
    </ConteinerCard>
  );
};

export default ItemCard;
