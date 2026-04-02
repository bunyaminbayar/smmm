"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Can I return items if I'm not satisfied?",
    a: "Yes, you can return items within [specify time frame] if you are not satisfied. Please review our return policy for further instructions.",
  },
  {
    q: "What is your warranty policy?",
    a: "We offer a [specify duration] warranty on our products. Please see our warranty policy for specific details and coverage.",
  },
  {
    q: "What are your shipping and delivery policies?",
    a: "Our shipping and delivery policies vary depending on the location and shipping method chosen. Please refer to our shipping page for detailed information.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept various payment methods, including [list accepted payment methods]. You can choose the most convenient option during the checkout process.",
  },
  {
    q: "Do you have a customer loyalty program?",
    a: "Yes, we have a customer loyalty program. Earn points with each purchase and enjoy exclusive benefits. Join now to start earning rewards!",
  },
];

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
    </svg>
  );
}

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="faqs-block style-one lg:mt-[100px] sm:mt-16 mt-10">
      <div className="flex max-xl:flex-wrap main">
        <div className="w-full xl:w-1/2">
          <div className="bg-img w-full">
            <img
              alt=""
              loading="lazy"
              width={5000}
              height={5000}
              className="w-full"
              style={{ color: "transparent" }}
              src="/images/component/item1.png"
            />
          </div>
          <div className="desc bg-blue flex items-center justify-center">
            <div className="content flex gap-8">
              <i className="icon-hand-team text-white flex-shrink-0" />
              <h4 className="heading4 text-white">
                We aim for a world of convenience and value for many customers
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 bg-surface">
          <div className="content-main">
            <div className="heading3">Frequently Asked questions</div>
            <div className="list-question">
              {FAQ_ITEMS.map((item, i) => {
                const open = openIndex === i;
                return (
                  <button
                    key={item.q}
                    type="button"
                    className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer w-full text-left bg-transparent ${open ? "open" : ""}`.trim()}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <div className="question-item-main flex items-center justify-between py-4 heading7 gap-4">
                      {item.q}
                      {open ? <MinusIcon /> : <PlusIcon />}
                    </div>
                    <div className="content-question">
                      <div className="border-line w-full" />
                      <div className="body3 text-secondary pb-4">{item.a}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
