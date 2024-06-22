import styled from "styled-components";

export const MainDashboard = styled.main`
  width: 100%;
`;

export const FigurePrincipal = styled.figure`
  width: 100%;
  height: 150px;
`;

export const PrincipalImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;
export const NavCards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 40px;
`;
export const Cards = styled.li`
  list-style: none;

  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main};

  width: 100px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Containerimage = styled.figure`
  width: 74px;
  height: 74px;
`;
export const ImageCards = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;


`;
