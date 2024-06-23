// import { createContext, ReactNode, useContext, useState } from "react";

// interface ChildrenProps {
//   children: ReactNode;
// }

// interface IuseCartProvider {
//   searchResults: IPionner[] | undefined;
//   search: string | undefined;
//   encontrarPioneirosPorNome(nome: string): void;
// }

// const CartContext = createContext({} as IuseCartProvider);

// const CartProvider = ({ children }: ChildrenProps) => {
//   const [searchResults, setSearchResults] = useState<IPionner[] | undefined>();
//   const [search, setSearch] = useState<string | undefined>();

//   function encontrarPioneirosPorNome(nome: string) {
//     const nomeMinusculo = nome.toLowerCase();
//     const pioneirosEncontrados = pionner.filter((pioneiro) =>
//       pioneiro.nome.toLowerCase().includes(nomeMinusculo)
//     );

//     setSearchResults(pioneirosEncontrados);
//     setSearch(nome);
//   }

//   return (
//     <CartContext.Provider
//       value={{ searchResults, search, encontrarPioneirosPorNome }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

// export const useCart = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error("useCart deve ser usado dentro de um CartProvider");
//   }

//   return context;
// };
