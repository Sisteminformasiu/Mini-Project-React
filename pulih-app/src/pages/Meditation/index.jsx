import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import meditation_music from "../../contentWord/meditation_music.json";

import HeaderArticle from "../../component/HeaderArticle";
import Navbar from "../../component/Navbar";
import Container from "../../component/container";
import CardKonseling from "../..//component/cardKonseling";

const Meditation = () => {
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-white">
      <div className="bg-white">
        <Navbar
          home="Home"
          story="Story"
          meditation="Meditation"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      {useLanguage ? (
        <div className="mt-3">
          <div>
            <HeaderArticle
              author="Discover the benefits of daily meditation  for your life with Pulih"
              description="Manage your mood with meditation and be mindful everyday"
              title="MEDITATION"
              bg_Image="https://img.freepik.com/free-vector/sunset-sky-clouds-with-sun-shining-rays_107791-10851.jpg?size=626&ext=jpg&ga=GA1.1.1597884202.1697846672&semt=sph"
            />
          </div>
          <Container>
            <div>
              <h1 className="text-3xl font-black">
                Try listening to this to make the most of your day
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-y-5 pb-5 pt-6">
              {meditation_music &&
                meditation_music.map((item) => {
                  return (
                    <div id={item?.id}>
                      <CardKonseling
                        image={item?.image}
                        title={item?.title}
                        description={item?.description}
                        onClick={() =>
                          navigate(`/detail_music/${item?.search?.id}`, {
                            state: {
                              detailMusic: item,
                            },
                          })
                        }
                      />
                    </div>
                  );
                })}
            </div>
          </Container>
        </div>
      ) : (
        <div className="mt-3">
          <div>
            <HeaderArticle
              author="Kendalikan setiap kecemasan dan pikiran yang mengganggu dengan
              meditasi bareng Pulih"
              description="Kelola Mood Dengan Meditasi Jadi Mindfull Tiap Hari"
              title="MEDITASI"
              bg_Image="https://img.freepik.com/free-vector/sunset-sky-clouds-with-sun-shining-rays_107791-10851.jpg?size=626&ext=jpg&ga=GA1.1.1597884202.1697846672&semt=sph"
            />
          </div>
          <Container>
            <div>
              <h1 style={{ width: "100vh" }} className="text-3xl font-black">
                Mau bikin hati dan harimu lebih tenang? Dengerin ini, yuk!
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-y-5 pb-5 pt-6">
              {meditation_music &&
                meditation_music.map((item) => {
                  return (
                    <div id={item?.id}>
                      <CardKonseling
                        image={item?.image}
                        title={item?.title}
                        description={item?.description}
                        onClick={() =>
                          navigate(`/detail_music/${item?.search?.id}`, {
                            state: {
                              detailMusic: item,
                            },
                          })
                        }
                      />
                    </div>
                  );
                })}
            </div>
          </Container>
        </div>
      )}
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
};

export default Meditation;
