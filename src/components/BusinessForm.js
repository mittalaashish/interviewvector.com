import React from 'react'
import arrow from "../../static/arrow.png"


const BusinessForm = ({handleInput,handleForm ,data}) => {
    console.log(data)
    return (
        <div className="right">
            <div className="w-form">
              <form name="business" id="business" data-netlify="true" method="POST" onSubmit={handleForm}>
                  <input type="hidden" name="form-name" value="business" />
                    <label htmlFor="name" className="lebel">
                        Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="name"
                        onChange={handleInput}
                        id="name"
                        value={data.name}
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
                                onChange={handleInput}
                                id="field"
                                required
                                value={data.company}
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Role <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="role"
                                onChange={handleInput}
                                id="field-2"
                                required
                                value={data.role}
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
                                onChange={handleInput}
                                id="field-4"
                                required
                                value={data.email}
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Contact Number <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="tel"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="contact_number"
                                onChange={handleInput}
                                id="field-2"
                                required
                                value={data.contact_number}
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
                        onChange={handleInput}
                        id="email"
                        required
                        value={data.learn}
                    />
                    <label htmlFor="message" className="lebel">
                        Message (if any)<span style={{ color: "red" }}>*</span>
                  </label>
                    <input
                        type="text"
                        className="txt-fld w-input"
                        maxLength={256}
                        name="message"
                        onChange={handleInput}
                        id="message"
                        required
                        value={data.message}
                    />

                    <input
                        type="submit"
                        defaultValue="SUBMIT"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
                    />
                </form>
         
            </div>
        </div>
    )
}

export default BusinessForm
