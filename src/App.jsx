import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./Structure/Footer";
import Programs from "./Pages/Programs";
import ClubActivities from "./Pages/ClubActivities";
import Home from "./Pages/HomePage";
import ComingSoon from "./Pages/ComingSoon";

const siteIsLive = process.env.SITE_IS_LIVE;

function App() {
  const ref = React.useRef(null);

  if (siteIsLive) {
    return (
      <div className="base" id="back-to-top">
        <CssBaseline />

        <Navbar ref={ref} />

        <div className="mainBody">
          <Switch>
            <Route exact path="/" render={(props) => <Home ref={ref} />} />
            {/* <Route path='/WhyRecruitUs' render={props => (<WhyRecruitUs ref={ref}/>)} 
            /> */}
            <Route
              path="/Programs"
              render={(props) => <Programs ref={ref} />}
            />
            <Route
              path="/Clubs"
              render={(props) => <ClubActivities ref={ref} />}
            />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  } else {
    return <ComingSoon/>
  }
}

export default App;

/**
  const [screenSize, setScreenSize] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenSize(window.screen.width);
  });
 */