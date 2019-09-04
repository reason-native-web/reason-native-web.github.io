const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a
              href={this.docUrl(
                "http/getting-started.html",
                this.props.language
              )}
            >
              Your first web server
            </a>
            <a href={this.docUrl("guides.html", this.props.language)}>Guides</a>
            <a href={this.docUrl("api.html", this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {this.props.config.users && (
              <a href={this.pageUrl("users.html", this.props.language)}>
                User Showcase
              </a>
            )}
            <a href="https://discord.gg/uPzQwfa">Reason Discord</a>
            <a href="https://reasonml.chat/">ReasonML Forum</a>
            <a href="https://discord.gg/Xge2f7Z">OCaml Discord</a>
            <a href="https://discuss.ocaml.org/">OCaml Discuss</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/reason-native-web">GitHub</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
