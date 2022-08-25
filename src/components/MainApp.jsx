import React, { useState, useEffect } from "react";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState({
    data: {
      languages: [],
    },
  });
  const [text, setText] = useState("Bonjour");
  const [langA, setlangA] = useState("0");
  const [langB, setlangB] = useState("0");
  const [langAuto, setLangAuto] = useState({
    data: {
      detections: [
        [
          {
            confidence: 0,
            language: "",
            isReliable: false,
          },
        ],
      ],
    },
  });

  const [textTranslated, setTextTranslated] = useState({
    data: {
      translations: [
        {
          translatedText: "",
        },
      ],
    },
  });

  const optionsLangs = {
    method: "GET",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f191b88fb6mshf8ad3fb4f671f4ep1422d9jsna0a6d5de38b7",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  };

  const encodedParamsAuto = new URLSearchParams();
  encodedParamsAuto.append("q", text);

  const optionsAuto = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f191b88fb6mshf8ad3fb4f671f4ep1422d9jsna0a6d5de38b7",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParamsAuto,
  };
  const handleCLickAuto = (e) => {
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      optionsAuto
    )
      .then((response) => response.json())
      .then((response) => setLangAuto(response))
      .catch((err) => console.error(err));
    setlangA(langAuto.data.detections[0][0].language);
  };
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", text);
  encodedParams.append("target", langB);
  encodedParams.append("source", langA);

  const optionsTranslate = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f191b88fb6mshf8ad3fb4f671f4ep1422d9jsna0a6d5de38b7",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const handleCLickTranslate = (e) => {
    e.preventDefault();
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      optionsTranslate
    )
      .then((response) => response.json())
      .then((response) => setTextTranslated(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      optionsLangs
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  console.log(text);
  console.log(textTranslated);
  console.log(langA);
  console.log(langB);
  console.log(langAuto);
  const langs = data.data.languages;

  return (
    <div className="container" style={{ marginTop: "25px" }}>
      <div
        style={{
          backgroundcolor: "#a9c6d657",
          paddingBottom: "10px",
        }}
      >
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={langA}
          onChange={(event) => setlangA(event.currentTarget.value)}
          style={{
            width: "auto",
            display: "inline-block",
            margin: "30px",
            marginBottom: "10px",
          }}
        >
          <option value="0">Choose the language of the text</option>
          {langs.map((e) => (
            <option key={e.language} value={e.language}>
              {e.language}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleCLickAuto}
          onSubmit={(event) => event.preventDefault()}
          style={{ marginBottom: "10px", display: "inline-block" }}
        >
          auto detect
        </button>

        <div
          className="md-form mb-4 pink-textarea active-pink-textarea-2"
          style={{
            width: "auto",
            margin: "30px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>
            <label className="badge bg-primary" style={{ color: "#ffffff" }}>
              Enter text
            </label>
          </h3>
          <textarea
            id="form17"
            value={text}
            onChange={(event) => {
              setText(event.currentTarget.value);
            }}
            className="md-textarea form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div
        style={{
          backgroundcolor: "#a9c6d6",
          paddingBottom: "5px",
        }}
      >
        <select
          className="form-select"
          defaultValue={langB}
          onChange={(event) => setlangB(event.currentTarget.value)}
          style={{
            width: "auto",
            margin: "30px",
            marginTop: "10px",
            marginBottom: "10px",
            display: "inline-block",
          }}
          aria-label="Default select example"
        >
          <option value="0">Choose your language</option>
          {langs.map((e) => (
            <option key={e.language} value={e.language}>
              {e.language}
            </option>
          ))}
        </select>
        <button
          onClick={handleCLickTranslate}
          onSubmit={(event) => event.preventDefault()}
          type="button"
          className="btn btn-success"
          style={{
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          Translate
        </button>

        <div
          className="md-form mb-4 pink-textarea active-pink-textarea-2"
          style={{
            margin: "30px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>
            <label className="badge bg-primary" style={{ color: "#ffffff" }}>
              Result
            </label>
          </h3>
          <textarea
            id="form17"
            value={textTranslated.data.translations[0].translatedText}
            className="md-textarea form-control"
            rows="3"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
