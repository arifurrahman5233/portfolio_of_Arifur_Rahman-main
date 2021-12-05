import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ef4sanw', 'template_z8qrt9s', form.current, 'user_FHAXJ38HXN6IhYc83ft7z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset('');
    };

    return (
        <div>
            <div class="nav nav-tabs text-secondary fw-bold m-3">
                <div className="px-3 py-2 nav-item">
                    <h2 className="float-end"><i class="fas fa-envelope"></i> CONTACT WITH ME</h2>
                </div>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
                <form onSubmit={sendEmail} ref={form} class="row g-3">
                    <div class="col-md-12">
                        <input type="number" class="form-control" id="disabledTextInput" placeholder="CALL ME: +8801521-430914" disabled />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" name="user_name" placeholder="Name" />
                    </div>
                    <div class="col-md-6">
                        <input type="email" class="form-control" name="user_email" placeholder="Email" />
                    </div>
                    <div class="col-12">
                        <textarea type="text" class="form-control" name="message" placeholder="Message" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-secondary fw-bold">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;