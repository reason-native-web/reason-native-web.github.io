/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
        <img className="projectLogo" src={props.img_src} alt="Project Logo" />
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/re/1.png`} />
        <ProjectTitle siteConfig={siteConfig} />
      </SplashContainer>
    );
  }
}

let exampleCode=`
Morph.start_server(
  _request => Morph.Response.text("Hello world!")
) |> Lwt_main.run;
`;

function CodeBlock(props) {
  return (
    <div>
      <script>{"hljs.initHighlightingOnLoad();"}</script>

    <pre>
      <code className="re">{props.code}</code>
    </pre>
    </div>
  );
}

function ValueProp({ name, message }) {
  return (
    <section className="valueProp">
      <h3>{name}</h3>
      <p className="valueProp">
        {message}
      </p>
    </section>
  )
}

function Product({ children }) {
  return (
    <section className="Product">
      {children}
    </section>
  );
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Product>
            <ValueProp name="Morph" message="Intuitive, easy to use web framework" />
            <CodeBlock code={exampleCode} />
          </Product>
          <Product>
            <ValueProp name="OIDC" message="Intuitive, easy to use web framework" />
            <CodeBlock code={exampleCode} />
          </Product>
          <Product>
            <ValueProp name="Jose" message="Intuitive, easy to use web framework" />
            <CodeBlock code={exampleCode} />
          </Product>
        </div>
      </div>
    );
  }
}

module.exports = Index;
