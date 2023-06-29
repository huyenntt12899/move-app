import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { RootState } from "../../../../store/store";
import "./index.scss";
import { IDataUpComing } from "./model";
import Img from "../../../../components/lazy-load-image/img";
import ContentWrapper from "../../../../components/content-wrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const url = useSelector((state: RootState) => state.home.url);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const dataUpComing: IDataUpComing = data;
    const bg =
      url.backdrop +
      dataUpComing?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearchQuery = (event: any) => {
    if (event?.key === "Enter" && query?.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e?.target?.value)}
                onKeyUp={handleSearchQuery}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
