import React from "react";
import { useSelector } from "react-redux";

const Description = () => {
  const { singleEvent } = useSelector((state) => state.events);
  return (
    <div className="mt-6 text-[0.85rem] md:text-[0.95rem]  text-gray-800">
      <p>{singleEvent.description}</p>
      <p className="m-5">By the end of this course, you'll be able to :</p>
      <ul className="ml-5">
        <li className="desc-list">Define artificial intelligence</li>
        <li className="desc-list">
          Identify different types of artificial intelligence{" "}
        </li>
        <li className="desc-list">
          Understand how artificial intelligence can be used in our everyday
          lives
        </li>
      </ul>
      <p className="m-5">Why take this course ?</p>
      <p>
        This course is suitable for everyone, particularly those who want to
        know more about the technology we all encounter every day. It ll guide
        you through some of the different types of artificial intelligence, and
        how they can be used in our everyday lives in ways you might not even
        think of.
      </p>
      <p className="m-5 text-black font-medium">Covered in this course:</p>
      <ul className="text-black ml-5 font-medium">
        <li className="desc-list">What lifelong learning is</li>
        <li className="desc-list">
          The benefits of lifelong learning for both individuals and
          organization
        </li>
        <li className="desc-list">
          The connection betgeen personal and professional development
        </li>
        <li className="desc-list">
          How to create a supportive learning culture in the workplace
        </li>
        <li className="desc-list">
          {" "}
          How to incorporate lifelong learning into your daily life
        </li>
      </ul>
    </div>
  );
};

export default Description;
