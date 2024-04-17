import styled from 'styled-components';
import BotaoIcone from '../BotaoIcone';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #04244F;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  gap: 3px;
`;

const FooterTexto = styled.p`
  color: #fff;
  margin: 0 12px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Div>
        <BotaoIcone>
          <img src="/icones/favorito-ativo.png" alt="icon" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/icones/favorito-ativo.png" alt="icon" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/icones/favorito-ativo.png" alt="icon" />
        </BotaoIcone>
      </Div>
      <FooterTexto>
        Desenvolvido por VillyRosa
      </FooterTexto>
    </FooterContainer>
  );
};

export default Footer;