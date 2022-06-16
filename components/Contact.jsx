import React from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-[#5651e5] text-xl tracking-widest uppercase">
          Contact
        </p>
        <h3 className="py-4">Get In Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29udGFjdCUyMGVtYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="contact img"
                />
              </div>
            </div>
          </div>
          {/*Right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
