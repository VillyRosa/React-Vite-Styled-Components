import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  width: 212px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao 
            iconeAtivo="/icones/home-ativo.png" 
            iconeInativo="/icones/home-inativo.png"
            ativo
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas.png" 
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  )
};

export default BarraLateral;