import style from "../styles/Watch.module.css"; // Import CSS file for styling
import React, { useState, useEffect } from "react";
const interactivePoints = [
  {
    timestamp: 46, // Time in seconds when the video should pause
    type: "q",
    title:
      "This case revolves around Antoine Lavoisier, a popular French Chemist who was known for his law ",
    choices: [
      {
        id: 1,
        correct: true,
        text: "of conservation of mass",
      },
      {
        id: 2,
        correct: false,
        text: "of definite proportions",
      },
      {
        id: 3,
        correct: false,
        text: "of indefinite proportions",
      },
      {
        id: 4,
        correct: false,
        text: "of spaghetti with meatballs",
      },
    ],
  },
  {
    type: "no q",
    timestamp: 47,
    title: "",
    image: "/data/images/1.png",
  },
  {
    title: "Get back at him, give him the incorrect statement",
    type: "q",
    timestamp: 117, // Time in seconds when the video should pause
    choices: [
      {
        id: 5,
        correct: false,
        text: "Silicon has a high melting and boiling point",
      },
      {
        id: 6,
        correct: false,
        text: "Silicon is the second most abundant material on Earth",
      },
      {
        id: 7,
        correct: true,
        text: "Silicon is a great conductor of electricity",
      },
      {
        id: 8,
        correct: false,
        text: "Silicon exists as three natural isotopes",
      },
    ],
  },
  {
    type: "no q",
    timestamp: 239,
    title: "",
    image: "/data/images/2.png",
  },
  {
    title: "Bloopers",
    timestamp: 396, // Time in seconds when the video should pause
    type: "q",
    choices: [
      {
        id: 7,
        correct: true,
        text: "Yes",
      },
      {
        id: 8,
        correct: false,
        text: "No",
      },
    ],
  },
];

const Watch = () => {
  const [currentInteractivePoint, setCurrentInteractivePoint] = useState(null);
  const [value, setValue] = useState("");
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const videoElement = document.getElementById("videop");

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(videoElement.currentTime);
      const point = interactivePoints.find(
        (point) => point.timestamp === currentTime
      );
      if (point) {
        setCurrentInteractivePoint(point);
        setValue(point.title);
        if(point.image){
          setUrl(point.image)
        }
        videoElement.pause();
      } else {
        setCurrentInteractivePoint(null);
      }
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleChoiceClick = (correct, id) => {
    if (correct) {
      const videoElement = document.getElementById("videop");
      videoElement.currentTime = videoElement.currentTime + 1;
      videoElement.play();
      setCurrentInteractivePoint(null);
    } else {
      document.getElementById(id).style.background = "red";
      document.getElementById(id).style.color = "white";
    }
  };
  return (
    <>
      <section
        id="select"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-family)" }}>Who is Watching?</h1>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: "0px",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            gap: "20px",
            width: "60vw",
          }}
        >
          <li
            onClick={() => {
              document.getElementById("select").style.display = "none";
              document.getElementById("video").style.display = "flex";
            }}
          >
            <div
              style={{
                width: "210px",
                cursor: "pointer",
                height: "210px",
                background: "url(/data/netflix.jpg)",
                objectFit: "contain",
                borderRadius: "8px",
                marginLeft: "0px",
              }}
            ></div>
            <p
              style={{ textAlign: "center", fontFamily: "var(--font-family)" }}
            >
              Chemistry Class
            </p>
          </li>
          <li
            onClick={() => {
              document.getElementById("select").style.display = "none";
              document.getElementById("video").style.display = "flex";
            }}
          >
            <div
              style={{
                width: "210px",
                cursor: "pointer",
                height: "210px",
                background: "url(/data/netflix2.jpg)",
                objectFit: "cover",
                borderRadius: "8px",
                marginLeft: "0px",
              }}
            ></div>
            <p
              style={{ textAlign: "center", fontFamily: "var(--font-family)" }}
            >
              Another Class
            </p>
          </li>
          <li
            onClick={() => {
              document.getElementById("select").style.display = "none";
              document.getElementById("video").style.display = "flex";
            }}
          >
            <div
              style={{
                width: "210px",
                cursor: "pointer",
                height: "210px",
                background: "url(/data/netflix3.jpg)",
                objectFit: "cover",
                borderRadius: "8px",
                marginLeft: "0px",
              }}
            ></div>
            <p
              style={{ textAlign: "center", fontFamily: "var(--font-family)" }}
            >
              Some Stranger
            </p>
          </li>
          <li
            onClick={() => {
              document.getElementById("select").style.display = "none";
              document.getElementById("video").style.display = "flex";
            }}
          >
            <div
              style={{
                width: "210px",
                cursor: "pointer",
                height: "210px",
                background: "url(/data/netflix4.jpg)",
                objectFit: "cover",
                borderRadius: "8px",
                marginLeft: "0px",
              }}
            ></div>
            <p
              style={{ textAlign: "center", fontFamily: "var(--font-family)" }}
            >
              Another Stranger
            </p>
          </li>
        </ul>
      </section>
      {url && 
            <img style={{width:"100vw", height: "100vh"}} src={url} alt="Video"></img>}
      <section id="video" style={{ display: "none" }}>
        <div className={style.playerWrapper}>
          <video id="videop" className={style.video} controls>
            <source src="https://rr1---sn-apn7en7e.c.drive.google.com/videoplayback?expire=1698443237&ei=tQU8ZZuSKs6J8wTP0pCoAg&ip=105.154.119.13&id=b37c025e4b29b951&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=tN&mm=32&mn=sn-apn7en7e&ms=su&mv=m&mvi=1&pl=24&ttl=transient&susc=dr&driveid=1JjkHhcJCloRGQ8Jv3jRjKWkFypHZ-m38&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=458.361&lmt=1698097497477202&mt=1698432074&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRgIhAK7lRknrhBh-fwwScBa6ji7yGMD4tCsLPSrBjqiyBsB_AiEA4atlEg-iFXBpYf_TILWX0Saq3siQZZB_RypaVanPxak=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRgIhAN45fs2vQkhwgGZSaWXtp_d-lrYal3zwzpYEZm1EzNKwAiEA1f6UsepIJ_h4VbIPToEZs8d-STCd5FVmbM-_VswnrKE=&cpn=9EKz7QRRNqroKrMx&c=WEB_EMBEDDED_PLAYER&cver=1.20231024.01.02" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {currentInteractivePoint && (
            <div className={style.interactiveOverlay}>
             
              <h1 style={{ textAlign: "center" }}>{value}</h1>

              <div className={style.container}>
                {currentInteractivePoint.type == "q" ? (
                  currentInteractivePoint.choices.map((choice) => (
                    <>
                      <div>
                        <button
                          key={choice.id}
                          id={choice.id}
                          className={style.button}
                          onClick={() =>
                            handleChoiceClick(choice.correct, choice.id)
                          }
                        >
                          {choice.text}
                        </button>
                      </div>
                    </>
                  ))
                ) : (
                  
                  <button onClick={() => {
                    setUrl(null)
                    handleChoiceClick(true, null)
                  }}>Next</button>
                )}

              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Watch;
