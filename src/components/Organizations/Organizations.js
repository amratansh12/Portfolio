import "./Organizations.css";

export const Organizations = () => {
  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="organizations">
      <h3>Organizations I have worked for...</h3>
      <div className="organizations-section">
        <div className="orgs">
          <a href="https://www.wne3.com/" target="_black">
            <p>WNE3</p>
          </a>
          <span>
            As a full-stack developer, utilized Express.js and Node.js to create
            robust backend solutions and seamless API integrations for efficient
            order processing. Played a key role in frontend development with
            Next.js and Tailwind CSS, designing user-friendly interfaces and a
            dynamic user dashboard for intuitive navigation and data insights.
          </span>
        </div>
        <div className="orgs">
          <a
            href="https://www.linkedin.com/company/collabchatbots/posts/?feedView=all"
            target="_blank"
          >
            <p>CollabChatbots</p>
          </a>
          <span>
            As a React.js intern, led frontend development to create responsive
            interfaces and integrated Google OAuth API for secure
            authentication. Enhanced app functionality by integrating Google
            Search Console API for valuable insights, and optimized performance
            using Zustand for efficient context management.
          </span>
        </div>
      </div>
    </div>
  );
};
