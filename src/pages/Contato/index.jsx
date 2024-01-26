import styled from "styled-components";

const ContatoContainer = styled.div`
  height: 200px;
  width: auto;
`;

const EspacoImagens = styled.div`
  background-color: var(--azul-medio);
  padding: 10px;
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: auto;

`;

const BotaoSocial = styled.button`
  border: none;
  cursor: pointer;
`;

const ImagemSocial = styled.img`
  width: 50px;  
  
`;
const ImagemSocialPng = styled.img`
  width: 100px;  
  
`;

const Contato = () => {
  return (
    <>
      <ContatoContainer>
        <EspacoImagens>
          <BotaoSocial>
            <ImagemSocial src="/assets/social/linkedin.svg" alt="Linkedin" />
          </BotaoSocial>
          <BotaoSocial>
            <ImagemSocial src="/assets/social/github.svg" alt="github" />
          </BotaoSocial>
          <BotaoSocial>
            <ImagemSocialPng src="/assets/social/vercel.png" alt="vercel" />
          </BotaoSocial>
        </EspacoImagens>
      </ContatoContainer>
    </>
  );
};

export default Contato;