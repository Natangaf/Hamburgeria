interface Image {
  id: number;
  image: string;
}

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

interface Item {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  modifiers?: Modifier[];
  images?: Image[];
  available: boolean;
}

interface Section {
  id: number;
  name: string;
  description?: string|null;
  position: number;
  visible: number;
  images: Image[];
  items: Item[];
}

interface Database {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}
