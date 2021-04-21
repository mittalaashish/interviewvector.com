import React from 'react'
import arrow from "../../static/arrow.png"


const BusinessForm = () => {
    return (
        <div className="right">
            <div className="w-form">
                <form id="contact-form" data-netlify={true} method="POST">
                    <label htmlFor="name" className="lebel">
                        Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="name"
                        data-name="Name"
                        id="name"
                        required
                    />
                    <div className="flex-box form">
                        <div className="r1">
                            <label className="lebel">Company <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                className="text-field-3 w-input"
                                maxLength={256}
                                name="company"
                                data-name="Field"
                                id="field"
                                required
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Role <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="role"
                                data-name="Field 2"
                                id="field-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex-box form">
                        <div className="r1">
                            <label className="lebel">Email ID <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="email"
                                className="text-field-3 w-input"
                                maxLength={256}
                                name="email"
                                data-name="Field 4"
                                id="field-4"
                                required
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Contact Number <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="tel"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="contact_number"
                                data-name="Field 2"
                                id="field-2"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="email" className="lebel">
                        Where did you learn about us?<span style={{ color: "red" }}>*</span>
                  </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="learn"
                        data-name="Email"
                        id="email"
                        required
                    />
                    <label htmlFor="message" className="lebel">
                        Message (if any)<span style={{ color: "red" }}>*</span>
                  </label>
                    <input
                        type="text"
                        className="txt-fld w-input"
                        maxLength={256}
                        name="message"
                        data-name="Email 2"
                        id="message"
                        required
                    />

                    <input
                        type="submit"
                        defaultValue="SUBMIT"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
                    />
                </form>
                <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                    <div>
                        Oops! Something went wrong while submitting the form.
                  </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessForm
