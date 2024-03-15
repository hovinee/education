"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function MainArea({ data }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (id) => {
    if (id === 3) {
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  console.log(data.companys[0].tags[0]);
  return (
    <>
      <Modal isOpen={modalOpen} onClose={handleClose} />
      <main className="w-full py-24  scroll-auto">
        <div className="w-[1140px] px-[40px] mx-auto">
          <header className="mb-12">
            <h1 className="text-5xl text-center text-white font-roboto font-bold">
              교육기부 메타버스 체험관 구축 및 운영 지원
            </h1>
            <div className="flex justify-end text-gray-200 flex-col items-end mt-4">
              <p>발주기관: 한국창의재단</p>
              <p>수행기관: 듀코젠</p>
            </div>
          </header>
          <section>
            <ul className="grid grid-cols-4 gap-2">
              {data.edus.map((edu) => (
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
              {data.companys.map((company) => (
                <li key={company.id} onClick={() => handleOpen(company.id)}>
                  <div className="hover:opacity-80">
                    <a
                      href={company.path}
                      target={company.id === 3 ? "_self" : "_blank"}
                    >
                      <Image
                        src={company.imageUrl}
                        alt={company.id}
                        width={0}
                        height={0}
                        className="h-full w-full rounded-md"
                        sizes="100%"
                      />
                      <p className="text-white text-lg mt-2">
                        {company.id + ". " + company.sub_title}
                      </p>
                      <p className="text-gray-300 text-sm">{company.title}</p>
                      <p className="text-gray-300 text-xs flex gap-1">
                        {company.tags.map((tag, index) => (
                          <span key={index}>{"#" + tag}</span>
                        ))}
                      </p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
