import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import questionAnimation1 from "../../assets/questionAnimation1.json";
export default function Contact() {
  return (
    <div className="w-full  h-auto mt-10 flex flex-col gap-6 items-center justify-center">
      <p className="lg:text-5xl text-3xl md:text-4xl font-bold text-center text-slate-700 pb-10">
        Sualınız var? Bizə yazın 📧
      </p>
      <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-center">
        <Map />
        <ContactUs />
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="md:w-1/3 w-full p-6 flex items-center justify-center">
      <Lottie animationData={questionAnimation1} className="w-[25rem] h-auto" />
    </div>
  );
}

function ContactUs() {
  const form = useRef();
  const [isSucsess, setIsSucsess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41fka7z",
        "template_fs7w17a",
        form.current,
        "cMOJNAf15-6wHCLrO"
      )
      .then(
        () => {
          setIsSucsess(true);
          setTimeout(() => setIsSucsess(false), 7000);
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          setIsError(true);
          setTimeout(() => setIsError(false), 7000);
        }
      );
  };

  return (
    <div className="md:w-1/2 w-full mt-5 p-6 border-2 bg-white rounded-xl shadow-lg">
      {isSucsess ? (
        <Sucsess />
      ) : isError ? (
        <Reject />
      ) : (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <label className="text-lg text-gray-700">Ad</label>
          <input
            type="text"
            name="user_name"
            placeholder="Adınızı daxil edin"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <label className="text-lg text-gray-700">E-poçt</label>
          <input
            type="email"
            name="user_email"
            placeholder="Emailinizi daxil edin"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <label className="text-lg text-gray-700">Mesaj</label>
          <textarea
            name="message"
            placeholder="Mesajınız"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-24 resize-none"
          />
          <button
            type="submit"
            className="w-full h-12 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

function Sucsess() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-green-500 text-white rounded-md">
      <p className="text-lg">
        Mesajınız uğurla göndərildi. Ən qısa zamanda sizə geri dönüş ediləcək.
      </p>
    </div>
  );
}

function Reject() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-red-500 text-white rounded-md">
      <p className="text-lg">
        Mesajınız göndərilməsində problem yarandı. Yenidən cəhd edin!
      </p>
    </div>
  );
}
