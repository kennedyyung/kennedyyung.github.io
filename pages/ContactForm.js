import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'


const ContactForm = () => {
  const form = useRef();
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a3tj6t4', 'template_651pgju', form.current, {
        publicKey: 'ybw-MdbAn3iyFWH9G',
      })
      .then(

        (result) => {
                      setStateMessage("Message sent! I'll get back to you as soon as I can :)");
                      setTimeout(() => {
                        setStateMessage(null);
                      }, 5000); // hide message after 5 seconds
                    },
                    (error) => {
                      setStateMessage('Something went wrong, please try again later');
                      setTimeout(() => {
                        setStateMessage(null);
                      }, 5000); // hide message after 5 seconds
                    }
      );
      e.target.reset();
  };


  return (
      <div className=" text-black dark:text-dark-text bg-base dark:bg-dark-base mb-20" id="contact">
        <div className="grid place-items-center">
            <div className="font-extrabold text-5xl  mb-10">Contact Me </div>
        </div>
        <hr />
        <div className="mt-5">
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-flow-row ml-5 text-black dark:text-dark-text">
        <label>Name</label>
        <input type="text" name="user_name" className=" mb-2 bg-input text-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" placeholder="Name" required />

        <label>Email</label>

        <input type="text" name="user_email" className="mb-2 bg-input text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" placeholder="Email" required />
        <label>Message</label>

        <textarea name="message" rows="4" className="block p-2.5 w-3/4 text-sm bg-input text-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your message here"></textarea>

        <button type="submit" value="Send"  className="mt-2 mb-3 px-3 bg-txt w-1/5 text-sm font-medium text-center text-white p-2.5 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Submit</button>
        {stateMessage && <p>{stateMessage}</p>}
        </div>
      </form>
      </div>
      </div>
  );

};

export default ContactForm;

