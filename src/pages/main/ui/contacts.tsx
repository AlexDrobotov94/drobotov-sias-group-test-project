import styled from "styled-components";

export function Contacts() {
  return (
    <Wrapper>
      <a
        href="https://krasnodar.hh.ru/resume/54418ba1ff057bbc820039ed1f7869466f6f4d"
        target="_blank"
      >
        <img src="/hh.svg" alt="hh" width={35} height={35} />
      </a>
      <a
        href="https://github.com/AlexDrobotov94/drobotov-sias-group-test-project"
        target="_blank"
      >
        <img src="/github.svg" alt="github" width={35} height={35} />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
