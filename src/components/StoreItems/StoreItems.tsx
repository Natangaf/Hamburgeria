import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ISection } from "../../types/types";
import { HeaderStoreItems, StoreItems, ArrowIcon } from "./_storeItems";
import ItemCard from "../ItemCard/ItemCard";

const StoreItemsList = ({ items, id, name }: ISection) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <HeaderStoreItems onClick={toggleVisibility}>
        <p>{name}</p>
        <ArrowIcon className={isVisible ? "rotate" : ""}>
          <IoIosArrowDown />
        </ArrowIcon>
      </HeaderStoreItems>
      <StoreItems key={id} className={isVisible ? "expanded" : ""}>
        {items.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </StoreItems>
    </>
  );
};

export default StoreItemsList;
