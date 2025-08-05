import { Routes, Route } from "react-router-dom";
// import CircularGalleryComponent from "./Home_Gallery";
import {StateGallery} from "./StateGallery";
import InfiniteMenu from './rolling'
import {items} from './items'
import {GalleryWrapper} from './responsive'

function App() {
  return (
    <>
   
    <Routes>
<Route
  path="/"
  element={
  <>
    <div className="h-[10vh]">
     <p className="font-bold text-white desktop:text-5xl  bg-[#7A5CFA] desktop:pb-5 mobile:pb-5 desktop:pl-5 desktop:pt-10  mobile:text-2xl  mobile:pt-8 mobile:pl-5">Sthaniya</p>
       <div className="h-[90vh]  bg-[#7A5CFA]">
  <InfiniteMenu items={items} />
</div>
     </div>
   
  </>
 
  }


      
      />
      <Route
        path="/home"
        element={
          <div className="desktop:h-screen desktop:w-screen bg-[#E27D60] mobile:h-[100vh] mobile:w-[100vw]">
            <div>
              <p className="font-bold text-white desktop:text-5xl desktop:ml-10 desktop:pt-10 mobile:text-[18px] mobile:ml-5 mobile:pt-5">Sthaniya</p>
              <p className="font-[sans-serif] font-semibold text-white desktop:text-4xl text-center desktop:mt-10 mobile:text-[14px] mobile:pl-10 mobile:mt-5">
                Journey Through the Colors of Every State
              </p>
            </div>


        <GalleryWrapper/>
          


          
           
          </div>
        }
      />

      {/* Route for individual state grid */}
      <Route path="/gallery/:state" element={<StateGallery />}/>    
       
    </Routes>
      
 </>
  );
}

export default App;
