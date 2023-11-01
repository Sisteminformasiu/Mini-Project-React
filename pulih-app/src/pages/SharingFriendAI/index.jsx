import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import Input from "../../component/input";
import SideBar from "../../component/Sidebar";
import Container from "../../component/container";

function SharingFriend() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (loading) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [loading]);

  const handleResult = async () => {
    const newQuestion = prompt;
    const newQuestionEntry = {
      question: newQuestion,
    };

    setHistory([...history, newQuestionEntry]);
    setLoading(true);

    const newPrompt = `
    Ketika Saya menyapa, Balas sapaan saya dengan kata Halo terlebih dahulu ,
    Anggap kamu adalah seseorang Psikolog Handal yang berperan 
    sebagai teman yang baik yang selalu mendengar berbagai keluhan dan cerita-cerita 
    dari saya dan kamu menganggap saya sebagai saudara sendiri sehingga Kamu selalu 
    menginginkan yang terbaik bagi saya dengan cara memberikan saran-saran dengan 
    tutur kata yang lembut yang tidak menyakiti hati saya. Jadi ketika saya 
    menceritakan masalah saya, jadilah pendengar yang baik dan berikan solusi-solusi untuk masalah saya,
    Dan jangan menyambung pesan dari saya!
    ${prompt}`;

    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: newPrompt,
        temperature: 0.5,
        max_tokens: 2000,
      })
      .then((response) => {
        const newEntry = {
          question: prompt,
          answer: response?.data?.choices[0].text,
        };
        setHistory([...history, newEntry]);
        setPrompt("");
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="overflow-hidden w-screen h-full bg-lime-200 bg-opacity-80">
      <div className="flex">
        <div className="h-full bg-white">
          <SideBar size="fullSize" />
        </div>
        <div>
          <div className="w-full h-14 flex items-center p-5 bg-white">
            <div className=" flex items-center gap-x-2 ml-4">
              <FaCircleUser className="w-8 h-8" />
              <h2 className="text-lg font-bold">Sharing Friend</h2>
            </div>
            <div></div>
          </div>
          <Container>
            <div className="mx-5">
              <div
                style={{
                  width: "120vh",
                  maxHeight: "88vh",
                  overflowY: "scroll",
                }}
              >
                {history.map((entry, index) => (
                  <div
                    className={`h-full ${loading === true ? "" : "pb-14"}`}
                    key={index}
                  >
                    <div className="grid justify-end text-end">
                      <p className="font-bold mr-2">Moh. afizan</p>
                      <div className="w-full">
                        <p className="w-full rounded-xl bg-green-200 pl-4 p-2 ">
                          {entry.question}
                        </p>
                      </div>
                    </div>
                    <div className="grid justify-start">
                      <p className="font-bold ml-2">Sharing Friend</p>
                      <div className={`w-96`}>
                        <p className={`w-full rounded-xl bg-white pl-4 p-2 `}>
                          {entry.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {loading === true && (
                  <p className={`text-black font-semibold`}>
                    Sedang mengetik...
                  </p>
                )}
              </div>
              <div className="">
                <div
                  style={{
                    position: "fixed",
                    inset: "0",
                    top: "88vh",
                    right: "20px",
                    left: "55vh",
                  }}
                  className="bg-lime-200 bg-opacity-30 flex justify-center items-center gap-x-2"
                >
                  <div style={{ width: "120vh" }}>
                    <Input
                      type="text"
                      name="userName"
                      placeholder="Ceritakan Masalahmu"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>
                  <p
                    onClick={handleResult}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-500 hover:text-white hover:bg-cyan-500"
                  >
                    {<IoMdSend className="w-6 h-6" />}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SharingFriend;
