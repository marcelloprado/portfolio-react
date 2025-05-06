import styled from "styled-components";

const ContatoContainer = styled.div`
  height: 20rem;
  width: auto;
  padding-top: 5rem;
`;

const EspacoImagens = styled.div`
  background-color: var(--azul-medio);
  padding: 1.0rem;
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
  width: 7rem;  
  
`;
const ImagemSocialPng = styled.img`
  width: 10rem;  
  
`;

const Contato = () => {
  return (
    <>
      <ContatoContainer>
        <EspacoImagens>
          <BotaoSocial>
            <LinkSocial href="https://api.whatsapp.com/send?phone=5547999281500"  target="_blank">
              <ImagemSocial src="/assets/social/whatsapp.svg" alt="whatsApp" />
            </LinkSocial>
          </BotaoSocial>
          <BotaoSocial>
            <LinkSocial href="https://github.com/marcelloprado" target="_blank">
              <ImagemSocial src="/assets/social/github.svg" alt="github" />
            </LinkSocial>
          </BotaoSocial>
          <BotaoSocial>
            <LinkSocial href="https://vercel.com/marcello-prados-projects" target="_blank">
              <ImagemSocialPng src="/assets/social/vercel.svg" alt="vercel" />
            </LinkSocial>
          </BotaoSocial>
        </EspacoImagens>
      </ContatoContainer>
    </>
  );
};

export default Contato;