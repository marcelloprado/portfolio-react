import styled from "styled-components";

const ContatoContainer = styled.div`
  height: 100%;
`;

const EspacoImagens = styled.div`
  background-color: var(--azul-medio);
  padding: 20px;
  display: flex;
  justify-content: space-around;
  height: 90px;
`;

const BotaoSocial = styled.button`
  border: none;
  cursor: pointer;
  
`;

const Contato = () => {
  return (
    <>
      <ContatoContainer>
        <EspacoImagens>
          <BotaoSocial>
            <img src="/assets/social/instagram.svg" alt="Instagram" />
          </BotaoSocial>
          <BotaoSocial>
            <img src="/assets/social/facebook.svg" alt="Facebook" />
          </BotaoSocial>
          <BotaoSocial>
            <img src="/assets/social/twitter.svg" alt="Twitter" />
          </BotaoSocial>
        </EspacoImagens>
      </ContatoContainer>
    </>
  );
};

export default Contato;