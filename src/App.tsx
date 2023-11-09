import Layout from "common/layout/Layout";
import About from "common/pages/about/About";
import Artist from "common/pages/artist/Artist";
import Audition from "common/pages/audition/Audition";
import Home from "common/pages/home/Home";
import Notice from "common/pages/notice/Notice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Wrapper = styled.div``;

const GlobalStyles = createGlobalStyle`

  ${reset}
  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  html {
    font-size: 10px;

    @media screen and (max-width: 500px) {
    font-size: 8px;
  }
  }

  body {
    width: 100%;
    height: 100%;
    color: #222;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/artist" element={<Artist />}></Route>
            <Route path="/audition" element={<Audition />}></Route>
            <Route path="/notice" element={<Notice />}></Route>
          </Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
