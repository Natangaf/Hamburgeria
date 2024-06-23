import { IItem } from "../../types/types";

interface ModalItenProps {
  item: IItem | null;
  onClose: () => void;
}

const ModalIten = ({ item, onClose }: ModalItenProps) => {
  if (!item) {
    onClose();
  }
  return <>
  </>;
};

export default ModalIten;
