import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "./components/SlickSlider";
import SwiperCenterMod from "./components/SwiperCenterMod";
import SwiperSlider from "./components/SwiperSlider";
import SlickCenterMod from "./components/SlickCenterMod";
function App() {
  return (
    <>
      <SlickSlider />
      <SlickCenterMod />
      <SwiperSlider />
      <SwiperCenterMod />
    </>
  );
}

export default App;
