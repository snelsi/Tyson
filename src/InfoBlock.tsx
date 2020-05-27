import * as React from "react";
import styled from "styled-components";

interface InfoBlockProps {}

const Wrapper = styled.aside`
  @media (max-width: 1080px) {
    display: none;
  }

  padding: 1.5em 2em;
  border: 1px solid #e8e8e8;

  & > .copyright {
    padding-top: 1em;
  }
`;
export const InfoBlock: React.FC<InfoBlockProps> = () => (
  <Wrapper>
    <div>
      Ця програма демонструє можливості розробленого транслятора до мови{" "}
      <a href="/specification.pdf" target="_blank" rel="noopener">
        <b>Tyson</b>
      </a>
      .
    </div>
    Специфікацію мови можна знайти{" "}
    <a href="/specification.pdf" target="_blank" rel="noopener">
      тут
    </a>
    . Код написаної програми, включаючи алгоритми лексичного, синтаксичного аналізу (плюс Antlr4),
    парсер, можна знайти в репозиторії на{" "}
    <a href="https://github.com/snelsi/tyson" target="_blank" rel="noreferrer noopener">
      gitHub
    </a>
    . <div className="copyright">©Roman Zhuravlov, 2020</div>
  </Wrapper>
);
