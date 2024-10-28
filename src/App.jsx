import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(null); 

  const faqs = [
    { id: 0, title: "What is the difference between a UI and UX Designer?", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt excepturi sapiente vel eum perspiciatis libero est. Voluptatem quasi, labore delectus maxime culpa maiores, suscipit reiciendis officiis fuga nisi libero possimus quaerat error inventore eum repellendus explicabo natus exercitationem sequi quo voluptates! Dolore vero neque vel voluptatem nostrum cumque." },
    { id: 1, title: "How to become a UI designer?", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt excepturi sapiente vel eum perspiciatis libero est. Voluptatem quasi, labore delectus maxime culpa maiores, suscipit reiciendis officiis fuga nisi libero possimus quaerat error inventore eum repellendus explicabo natus exercitationem sequi quo voluptates! Dolore vero neque vel voluptatem nostrum cumque." },
    { id: 2, title: "What is the best UI design tool?", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt excepturi sapiente vel eum perspiciatis libero est. Voluptatem quasi, labore delectus maxime culpa maiores, suscipit reiciendis officiis fuga nisi libero possimus quaerat error inventore eum repellendus explicabo natus exercitationem sequi quo voluptates! Dolore vero neque vel voluptatem nostrum cumque." },
    { id: 3, title: "What is the best place to learn Figma?", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt excepturi sapiente vel eum perspiciatis libero est. Voluptatem quasi, labore delectus maxime culpa maiores, suscipit reiciendis officiis fuga nisi libero possimus quaerat error inventore eum repellendus explicabo natus exercitationem sequi quo voluptates! Dolore vero neque vel voluptatem nostrum cumque." },
    { id: 4, title: "Should designers code?", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt excepturi sapiente vel eum perspiciatis libero est. Voluptatem quasi, labore delectus maxime culpa maiores, suscipit reiciendis officiis fuga nisi libero possimus quaerat error inventore eum repellendus explicabo natus exercitationem sequi quo voluptates! Dolore vero neque vel voluptatem nostrum cumque." },
  ];

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id); 
  };

  return (
    <section className="accSec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 pt-5">
            <h1
              className="text-center"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Frequently Asked Questions
            </h1>
          </div>
          {faqs.map((faq) => (
            <div className="col-8 mt-5" key={faq.id}>
              <div className="accordion">
                <div
                  className="accordionHeader d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(faq.id)} 
                  style={{ cursor: "pointer" }}
                >
                  <h6 className="mx-3">{faq.title}</h6>
                  <i
                    className={`fa-solid fa-chevron-${
                      open === faq.id ? "up" : "down"
                    } mx-3`}
                  ></i>
                </div>
                {open === faq.id && ( 
                  <div className="accordionBody mt-2">
                    <p style={{fontWeight:"500"}}>{faq.desc}</p>
                    <button
                      className="bg-warning py-1 px-3 text-white rounded"
                      style={{ border: "none" }}
                    >
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
