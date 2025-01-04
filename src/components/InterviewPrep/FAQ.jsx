import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between a stack and a queue?",
      answer: `
        A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
        Operations like push and pop occur at the same end (top). 
        A queue is a linear data structure that follows the First In, First Out (FIFO) principle. 
        Operations like enqueue occur at the rear, and dequeue occurs at the front.
      `,
    },
    {
      question: "How does a binary search algorithm work?",
      answer: `
        Binary search is an efficient algorithm for finding an item in a sorted array. 
        It works by dividing the search interval in half repeatedly. 
        Start by comparing the target value to the middle element. 
        If they are not equal, discard the half where the target cannot exist. 
        Continue this process until the value is found or the search interval is empty.
      `,
    },
    {
      question: "What is a linked list?",
      answer: `
        A linked list is a linear data structure in which elements are stored in nodes. 
        Each node contains data and a reference (or pointer) to the next node in the sequence. 
        There are various types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists.
      `,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl p-6 bg-white shadow-md rounded-lg ml-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 mb-4">
          <button
            className="flex justify-between items-center w-full text-left text-gray-700 font-medium focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
