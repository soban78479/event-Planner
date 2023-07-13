

const Header = () => {
    const headerStyle = {
        backgroundImage: "url('/fidel-fernando-249DzAuJTqQ-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "500px",
      };
    return(
        <div id="header" style={headerStyle}> 
       <h1 id="header-heading">Events For You <br />
       Don't Wait to Join</h1>
        </div>
    )
}

export default Header;