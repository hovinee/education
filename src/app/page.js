"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EDUS = [
  {
    id: 1,
    title: "교육기부 홈페이지",
    path: "https://www.teachforkorea.go.kr/home/kor/contents.do?menuPos=66",
    imageUrl: "/images/edu/1.png",
  },
  {
    id: 2,
    title: "교육기부 메타버스 타운",
    path: "https://zep.us/play/25KkNv",
    imageUrl: "/images/edu/2.png",
  },
];

const COMPANIES = [
  {
    id: 1,
    title: "KAI 한국항공우주산업",
    sub_title: "에비에이션캠프",
    path: "https://www.spatial.io/s/KAI-6597529d96ef31be78253405?share=5974653995449762303",
    imageUrl: "/images/company/6.png",
  },
  {
    id: 2,
    title: "공항철도주식회사",
    sub_title: "메타아렉스",
    path: "https://www.spatial.io/s/AREX-65debe3629783b1b2db83da8?share=7767288393538263499",
    imageUrl: "/images/company/5.png",
  },
  {
    id: 3,
    title: "굿네이버스",
    sub_title: "콜린빌리지",
    path: "#",
    imageUrl: "/images/company/4.png",
  },
  {
    id: 4,
    title: "CJ올리브네트웍스",
    sub_title: "SW창의캠프 팩토리원",
    path: "https://www.spatial.io/s/CJ-65e8524f0f41579b6361db4b?share=408478583864270086",
    imageUrl: "/images/company/2.png",
  },
  {
    id: 5,
    title: "포스코1%나눔재단",
    sub_title: "그리닛포스",
    path: "https://www.spatial.io/s/Green-it-POS-65e825c0fe90cc43f4ba2170?share=679995450062589974",
    imageUrl: "/images/company/3.png",
  },
  {
    id: 6,
    title: "인지의 전당",
    sub_title: "스컬섬 탈출기",
    path: "https://pathfinder-bice-eta.vercel.app/healing/holland",
    imageUrl: "/images/company/1.png",
  },
  {
    id: 7,
    title: "한국산림복지진흥원",
    sub_title: "포로롱포이",
    path: "https://www.spatial.io/s/Sanlimbokji-655c3b706505265d771642ec?share=830523424830655443",
    imageUrl: "/images/company/7.png",
  },
];

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`z-10 fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={onClose} />
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <span
          className="absolute top-0 right-0 p-3 cursor-pointer"
          onClick={onClose}
        >
          &#10006;
        </span>
        <Image
          src="/images/company/qr_code.png"
          alt="qr_code"
          width={0}
          height={0}
          className="h-full w-full rounded-md"
          sizes="100%"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (id) => {
    if (id === 3) {
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <main className="w-full h-screen bg-zinc-800 scroll-auto">
      <div className="w-[1140px] px-[40px] mx-auto pt-20">
        <Modal isOpen={modalOpen} onClose={handleClose} />
        <h1 className="text-center text-5xl mb-12 text-white font-mono">
          교육기부 메타버스 체험관
        </h1>
        <section>
          <ul className="grid grid-cols-4 gap-2">
            {EDUS.map((edu) => (
              <li key={edu.id}>
                <div className="hover:opacity-80">
                  <a href={edu.path} target="_blank">
                    <Image
                      src={edu.imageUrl}
                      alt={edu.id}
                      width={0}
                      height={0}
                      className="h-full w-full rounded-md"
                      sizes="100%"
                    />

                    <p className="text-white text-lg mt-2">{edu.title}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className="grid grid-cols-4 mt-20 gap-2">
            {COMPANIES.map((company) => (
              <li key={company.id} onClick={() => handleOpen(company.id)}>
                <div className="hover:opacity-80">
                  <a
                    href={company.path}
                    target={company.id === 3 ? "_self" : "_blank"}
                  >
                    <Image
                      src={company.imageUrl}
                      width={0}
                      height={0}
                      className="h-full w-full rounded-md"
                      sizes="100%"
                    />
                    <p className="text-white text-lg mt-2">
                      {company.id + ". " + company.title}
                    </p>
                    <p className="text-gray-400 text-sm">{company.sub_title}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
