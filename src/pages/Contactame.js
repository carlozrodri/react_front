import "./Contactame.css";

function Contactame() {
  return (
    
      <div className="container p-3 text-zone form-floating form-control position-absolute top-50 start-50 translate-middle">
        <div className="contact-form">
          <h1>Contact me</h1>
          <p>Don't hesitate to contact me using the form below.</p>
          <form>
            <ul>
              <li className="mt-2">
                <input
                  class="form-control"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li className="mt-3">
                <input
                  class="form-control is-invalid"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="mt-3">
                <input
                  class="form-control"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="mt-4">
                <label for="floatingTextarea">Comments</label>
                <textarea
                  class="form-control pb-4"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="btn btn-success mt-3" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    
  );
}

export default Contactame;
