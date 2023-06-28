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
function App() {
  const dispacth = useDispatch();
  const url: any = useSelector((state: RootState) => state.home.url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    await fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispacth(getApiConfiguration(res));
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
