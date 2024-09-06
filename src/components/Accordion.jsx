import React, { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for building custom designs.'
    },
    {
      title: 'What is an Accordion?',
      content: 'An accordion is a UI pattern where content is hidden behind expandable panels.'
    }
  ];

  return (
    <div className="max-w-xl mx-auto my-10">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded-lg shadow-md">
          <button
            className="w-full text-left p-4 bg-gray-100 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-lg">{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            >
              ⬇️
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
