import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Card from "../../component/card";
import HeaderArticle from "../../component/HeaderArticle";
import Container from "../../component/container";

function Story() {
  const [dataCardArticle, setDataCardArticle] = useState([]);
  const [dataArticle, setDataArticle] = useState([]);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleMentalHealth = (category) => {
    axios
      .get(
        `https://65371609bb226bb85dd2d632.mockapi.io/articles?category=${
          !category ? "Mental Health" : category
        }`
      )
      .then((response) => {
        setDataCardArticle(response?.data.slice(0, 5));
        setDataArticle(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    const newData = [...dataCardArticle];
    const searchData = newData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setDataCardArticle(searchData);
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    handleMentalHealth();
  }, []);

  useEffect(() => {
    if (search === "") {
      handleMentalHealth();
    }
  }, [search]);

  return (
    <div className="w-screen h-screen">
      <div>
        <Navbar
          home="Home"
          story="Story"
          meditation="Meditation"
          konseling="Konseling"
          login="Login"
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div>
        {dataArticle && dataArticle.length > 0 && (
          <HeaderArticle
            author={dataArticle[10]?.author}
            date={dataArticle[10]?.date}
            description={dataArticle[10]?.description}
            title={dataArticle[10]?.title}
            bg_Image={dataArticle[10]?.image}
          />
        )}
      </div>
      <div>
        <Container>
          <ul className="flex gap-x-1 divide-x-2 divide-slate-500 mb-10 cursor-pointer">
            <li
              onClick={() => handleMentalHealth("Mental Health")}
              className="px-2"
            >
              Mental Health
            </li>
            <li
              onClick={() => handleMentalHealth("Relationship")}
              className="px-2"
            >
              RelationShip
            </li>
            <li
              onClick={() => handleMentalHealth("Family Life")}
              className="px-2"
            >
              Family life
            </li>
            <li
              onClick={() => handleMentalHealth("Psychology")}
              className="px-2"
            >
              Psychology
            </li>
          </ul>
        </Container>
      </div>
      <div className="flex gap-x-48 pb-12">
        <div className="grid grid-cols-1 gap-y-9">
          <Container>
            {dataCardArticle && dataCardArticle.length > 0 && (
              <h1>{dataCardArticle[0].category}</h1>
            )}
          </Container>
          {dataCardArticle &&
            dataCardArticle.map((item, index) => {
              return (
                <Card
                  key={index}
                  id={item?.id}
                  image={item?.image}
                  title={item?.title}
                  author={item?.author}
                  date={item?.date}
                  description={item?.description}
                  size="xl"
                  onClick={() =>
                    navigate(`/detail_story/${item?.search?.id}`, {
                      state: {
                        detailArticle: item,
                      },
                    })
                  }
                />
              );
            })}
        </div>
        {search ? (
          <div></div>
        ) : (
          <Container>
            <div className="w-80 h-full p-3">
              {dataArticle && dataArticle.length > 0 && (
                <div className="flex flex-col gap-y-2 divide-y-2">
                  <h2 className="text-2xl">Recommended</h2>
                  <div className="flex flex-col gap-y-6 pt-8">
                    <Card
                      id={dataArticle[6]?.id}
                      image={dataArticle[6]?.image}
                      title={dataArticle[6]?.title}
                      date={dataArticle[6]?.date}
                      onClick={() =>
                        navigate(`/detail_story/${dataArticle?.id}`, {
                          state: { detailArticle: dataArticle[6] },
                        })
                      }
                    />
                    <Card
                      id={dataArticle[7]?.id}
                      image={dataArticle[7]?.image}
                      title={dataArticle[7]?.title}
                      date={dataArticle[7]?.date}
                    />
                    <div
                      onClick={() =>
                        navigate(`/detail_story/${dataArticle?.id}`, {
                          state: { detailArticle: dataArticle[9] },
                        })
                      }
                      className="flex flex-col gap-y-2"
                    >
                      <p
                        style={{ fontSize: "15px" }}
                        className="w-80 text-sm font-bold"
                      >
                        {dataArticle[9]?.title}
                      </p>
                      <p
                        style={{ fontSize: "11px" }}
                        className="w-64 font-bold text-slate-400"
                      >
                        {dataArticle[9]?.date}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p
                        style={{ fontSize: "15px" }}
                        className="w-80 text-sm font-bold"
                      >
                        {dataArticle[5]?.title}
                      </p>
                      <p
                        style={{ fontSize: "11px" }}
                        className="w-64 font-bold text-slate-400"
                      >
                        {dataArticle[5]?.date}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-2 divide-y-2">
                      <h2 className="text-2xl">Popular Story</h2>
                      <div className="flex flex-col gap-y-2 pt-8">
                        <img src={dataArticle[8]?.image} />
                        <p
                          style={{ fontSize: "15px" }}
                          className="w-80 text-sm font-bold"
                        >
                          {dataArticle[8]?.title}
                        </p>
                        <p
                          style={{ fontSize: "11px" }}
                          className="w-64 font-bold text-slate-400"
                        >
                          {dataArticle[8]?.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        )}
      </div>
      <div className="w-screen h-16 bg-gray-400 flex justify-center items-center gap-x-5 text-slate-200 mt-16">
        <p className="font-semibold">Copyright &copy;2023 Pulih.</p>
        <p className="w-1 h-10 bg-slate-200 rounded-xl"></p>
        <p className="font-semibold">
          Better Mind Better
          <span className="font-bold">You</span>
        </p>
      </div>
    </div>
  );
}

export default Story;
