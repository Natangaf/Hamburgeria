import styled from "styled-components";

export const HeaderStoreItems = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  // Adicionado para alinhar verticalmente o ícone
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;  // Adicionado para indicar que é clicável
`;

export const StoreItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;  // Necessário para o efeito de deslizamento
  max-height: 0;  // Inicialmente colapsado
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;  // Transição suave

  &.expanded {
    max-height: 1000px;  // Define uma altura máxima que seja maior que o conteúdo esperado
    padding: 5px 0;  // Adiciona padding durante a expansão
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &.rotate {
    transform: rotate(180deg);
  }
`;
