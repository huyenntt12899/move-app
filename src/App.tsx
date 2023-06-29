import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { RootState } from "./store/store";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./pages/home/index";
import Details from "./pages/details/index";
import SearchResult from "./pages/search-result/index";
import Explore from "./pages/explore/index";
import PageNotFound from "./components/header/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IConfiguration, IUrlConfig } from "./models/App";

function App() {
  const dispatch = useDispatch();
  // const {url} : any= useSelector((state: RootState) => state.home.url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = async () => {
    await fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const configuration: IConfiguration = res;
      const url: IUrlConfig = {
        backdrop: configuration?.images?.secure_base_url + "original",
        poster: configuration?.images?.secure_base_url + "original",
        profile: configuration?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
