import "./FormStyles.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// CommonJS
// const Swal = require('sweetalert2')

const Form = () => {
  // start add sweetalert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleClick = () => {
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });

    setTimeout(function () {
      console.log("Finish!");
      window.location.reload(false);
    }, 3000);
  };

  // end add sweetalert

  // start config send email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mk8ngfh",
        "template_jemifxv",
        form.current,
        "B7zqHW4zdpzLNU-xb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // end config send email

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <input
          className="btn"
          type="submit"
          onClick={handleClick}
          value="Send"
        />
      </form>
    </div>
  );
};

export default Form;
