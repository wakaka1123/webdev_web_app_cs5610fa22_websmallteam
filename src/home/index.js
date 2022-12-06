import TopNav from "../topnav";
import ContactBar from "./contactBar";
import MidContent from "./midContent";
import Carousel from "./carousel";
import NavigationSidebar from "./sideBar";
import {useSelector} from "react-redux";


const HomePage = () =>{
  const {currentUser} = useSelector((state) => state.users)



  return (
      <>
        {/*<TopNav/>*/}
        {/*<ContactBar/>*/}
        {/*<NavigationBar/>*/}


        {
          currentUser &&
        <div className="row">
          <div className="col-2">
            <NavigationSidebar/>

          </div>
          <div className="col-10">
            <Carousel/>
            <br/>
            <br/>
            <br/>
            <MidContent/>
          </div>
        </div>
        }

        {
          !currentUser &&
            <div>
              <Carousel/>
              <br/>
              <br/>
              <br/>
              <MidContent/>
            </div>
        }

      </>


  )


}

export default HomePage;