import React from "react";
import { useTranslation } from "react-i18next";

const SectionPlus = () => {
  const { t } = useTranslation();

  return (
    <section className="1s my-xl-7 py-5" id="sekcePlus">
      <div
        className="container mb-xl-7"
        data-cue="fadeIn"
        data-show="true"
        style={{
          animationName: "fadeIn",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both",
        }}
      >
        <div className="row row-cols-1 row-cols-md-3 gy-4">
          {/* First Card */}
          <div
            className="col"
            data-cue="zoomIn"
            data-show="true"
            style={{
              animationName: "zoomIn",
              animationDuration: "600ms",
              animationTimingFunction: "ease",
              animationDelay: "0ms",
              animationDirection: "normal",
              animationFillMode: "both",
            }}
          >
            <div className="card card-lift">
              <div className="card-body d-flex flex-column gap-4">
                <div>
                  <img
                    src="https://modelviewer.dev/assets/ic_modelviewer.svg"
                    onError={(e) => (e.target.src = "image.png")}
                    width="64px"
                    alt="Assembly 3D"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="mb-0 fs-4">{t("sectionPlus.coreTech")}</h3>
                  <p className="mb-0">{t("sectionPlus.coreDescription")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="col"
            data-cue="zoomIn"
            data-show="true"
            style={{
              animationName: "zoomIn",
              animationDuration: "600ms",
              animationTimingFunction: "ease",
              animationDelay: "0ms",
              animationDirection: "normal",
              animationFillMode: "both",
            }}
          >
            <div className="card card-lift">
              <div className="card-body d-flex flex-column gap-4">
                <div>
                  <svg
                    fill="#000000"
                    height="64px"
                    width="64px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 396 396"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M390,190.762h-47.635v-48.824c0-4.142-3.357-7.5-7.5-7.5h-16.932V46.346c0-5.523-4.478-10-10-10H10c-5.523,0-10,4.477-10,10 v191.182c0,5.523,4.477,10,10,10h103.467c-1.99,11.434-6.269,30.326-14.881,49.079c-1.422,3.096-1.169,6.703,0.67,9.571 c1.839,2.868,5.011,4.603,8.418,4.603h70.528v26.272c0,4.142,3.357,7.5,7.5,7.5h107.975v9.101c0,3.313,2.687,6,6,6H390 c3.314,0,6-2.687,6-6V196.762C396,193.448,393.314,190.762,390,190.762z M178.202,141.938v85.591H20V56.346h277.934v78.091H185.702 C181.56,134.438,178.202,137.795,178.202,141.938z M293.677,329.553H193.202v-8.709h59.583v0.704c0,4.143,3.357,7.5,7.5,7.5 c4.143,0,7.5-3.357,7.5-7.5v-0.704h25.892V329.553z M293.677,196.762v109.082H193.202V149.438h134.163v41.324h-27.688 C296.363,190.762,293.677,193.448,293.677,196.762z M384,347.654h-78.323v-7.065h33.162v0.597c0,3.314,2.686,6,6,6 c3.313,0,6-2.686,6-6v-0.597H384V347.654z M384,328.588h-78.323V221.827H384V328.588z M384,209.827h-78.323v-7.065H384V209.827z"></path>
                    </g>
                  </svg>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="mb-0 fs-4">
                    {t("sectionPlus.multiPlatform")}
                  </h3>
                  <p className="mb-0">
                    {t("sectionPlus.multiPlatformDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            className="col"
            data-cue="zoomIn"
            data-show="true"
            style={{
              animationName: "zoomIn",
              animationDuration: "600ms",
              animationTimingFunction: "ease",
              animationDelay: "0ms",
              animationDirection: "normal",
              animationFillMode: "both",
            }}
          >
            <div className="card card-lift">
              <div className="card-body d-flex flex-column gap-4">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    height="64px"
                    width="64px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 15.5L9.92857 13M5 15.5L6.07143 13M6.07143 13L8 8.5L9.92857 13M6.07143 13H9.92857"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="mb-0 fs-4">{t("sectionPlus.arVrSupport")}</h3>
                  <p className="mb-0">{t("sectionPlus.arVrDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPlus;
