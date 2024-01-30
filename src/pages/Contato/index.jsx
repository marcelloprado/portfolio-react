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

const LinkSocial = styled.a`
  text-decoration: none;
`

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
            <LinkSocial href="https://www.linkedin.com/in/marcello-prado-7088ab128/" target="_blank">
              <ImagemSocial src="/assets/social/linkedin.svg" alt="Linkedin" />
            </LinkSocial>
          </BotaoSocial>
          <BotaoSocial>
            <LinkSocial href="https://github.com/marcelloprado" target="_blank">
              <ImagemSocial src="/assets/social/github.svg" alt="github" />
            </LinkSocial>
          </BotaoSocial>
          <BotaoSocial>
            <LinkSocial href="https://vercel.com/marcello-prados-projects" target="_blank">
              <ImagemSocialPng src="/assets/social/vercel.png" alt="vercel" />
            </LinkSocial>
          </BotaoSocial>
        </EspacoImagens>
      </ContatoContainer>
    </>
  );
};

export default Contato;