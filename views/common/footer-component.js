class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <style>
    footer {
      display: flex;
      justify-content: center;
      background-color: #c50167;
    }
    .site-footer {
      /* 길이넣기 */
      width: var(--max-width);
      height: 190px;
      padding: 10px 0;
      font-size: 15px;
      line-height: 24px;
      color: #121212;
    }
      .site-footer hr {
        border-top-color: #bbb;
        opacity: 0.5;
        width: 100%;
      }
      .site-footer hr.small {
        margin: 20px 0;
      }
      .site-footer h6 {
        color: #121212;
        font-size: 16px;
        font-weight: 800;
        text-transform: uppercase;
        margin: 5px 0;
        letter-spacing: 2px;
      }
      .site-footer a {
        color: #737373;
      }
      .site-footer a:hover {
        color: #f6f6f6;
        text-decoration: none;
        font-weight: bolder;
      }
      .first-row {
        display: flex;
        justify-content: center;
        gap: 10%;
        padding: 0 20px;
      }
      .categories {
        width: 20%;
      }
      .links {
        width: 20%;
        margin-left: 100px;
      }
      .footer-links {
        padding-left: 0;
        list-style: none;
      }
      .footer-links li {
        display: block;
      }
      .footer-links a {
        color: #121212;
      }
      .site-footer .social-icons {
        text-align: right;
      }
      .site-footer .social-icons a {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-left: 6px;
        margin-right: 0;
        border-radius: 100%;
        background-color: #33353d;
      }
      .second-row {
        padding: 0 20px;
        display: flex;
        flex-direction: row;
      }
      .copyright-box {
        width: 50%;
      }
      .copyright-text {
        margin: 0;
      }
      .social-icons-box {
        width: 50%;
      }
      .social-icons {
        padding-left: 0;
        margin-top:0;
        margin-bottom: 0;
        list-style: none;
      }
      .social-icons li {
        display: inline-block;
        margin-bottom: 4px;
      }
      .social-icons a {
        background-color: #eceeef;
        color: #818a91;
        font-size: 16px;
        display: inline-block;
        line-height: 44px;
        width: 44px;
        height: 44px;
        text-align: center;
        margin-right: 8px;
        border-radius: 100%;
        -webkit-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear;
      }
      
      .social-icons.size-sm a {
        line-height: 34px;
        height: 34px;
        width: 34px;
        font-size: 14px;
      }
      .social-icons a.gitlab:hover {
        background-color: #d46215;
      }
      .social-icons a.notion:hover {
        background-color: #dbe4e7;
      }
      .social-icons a.linkedin:hover {
        background-color: #007bb6;
      }
      @media (max-width: 767px) {
        .social-icons li.title {
          display: block;
          margin-right: 0;
          font-weight: 600;
        }
      }      
    </style>

    <footer>
    <div class="site-footer">
      <div class="container">
        <div class="first-row">
          <div class="about">
            <h6>About US</h6>
            <ul class="footer-links">
              <li>대표이사 <a href="">오강산</a></li>
              <li>BE <a href="">박철휘</a></li>
              <li>FE <a href="">송지은</a> <a href="">김세연</a> <a href="">김민희</a></li>
            </ul>
          </div>

          <div class="links">
            <h6>Contact</h6>
            <ul class="footer-links">
              <li>대한민국 대한시 민국구 만세로 66</li>
              <li>eliceteam6@abcde.com</li>
              <li>1234-6666</li>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="second-row">
          <div class="copyright-box">
            <p class="copyright-text">
              ⓒ elice Communication. All Rights Reserved.
            </p>
          </div>

          <div class="social-icons-box">
            <ul class="social-icons">
              <li>
                <a class="gitlab" href="#"><i class="icon-gitlab"></i></a>
              </li>
              <li>
                <a class="notion" href="#"><i class="icon-notion"></i></a>
              </li>
              <li>
                <a class="linkedin" href="#"><i class="icon-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>   
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-component", FooterComponent);