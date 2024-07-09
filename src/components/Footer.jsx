export const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By ♥ 
        <a href="https://www.linkedin.com/in/rajat-saini-2941a324b/" target="_blank">
           Rajat Saini
        </a>
        ©
        {year}
        <strong>
          Food<span> Court</span>
        </strong>
      </div>
    );
  };
  export default Footer;