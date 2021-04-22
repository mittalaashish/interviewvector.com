import React from 'react'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import arrow from "../../static/arrow.png";


const InterviewerForm = ({handleInput,handleForm }) => {
    return (
        <div className="right">
            <div className="w-form">
                <form name="contact" data-netlify={true} method="POST" onSubmit={handleForm} >
                <input type="hidden" name="contact" value="contact" />
                    <label htmlFor="name" className="lebel">
                        Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="interviewer_name"
                        onChange={handleInput}
                        required
                    />
                    <div className="flex-box form">
                        <div className="r1">
                            <label className="lebel">Year of Graduation <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                className="text-field-3 w-input"
                                maxLength={256}
                                name="year_of_graduation"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Current Employer <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="current_employer"
                                onChange={handleInput}
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
                              onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="r2">
                            <label className="lebel">Contact Number <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="tel"
                                className="text-field-4 w-input"
                                maxLength={256}
                                name="contact"
                                onChange={handleInput}
                                required
                            />
                        </div>
                    </div>
                    {/* 
                    <div className="form">
                        <label className="lebel">Upload your resume <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <input
                            type="file"
                            className="text-field-3 w-input"
                            maxLength={256}
                            name="email"
                            data-name="Field 4"
                            id="field-4"
                            required
                        />
                    </div> */}

                    <label htmlFor="email" className="lebel">
                        LinkedIn profile link <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="linkedin_profile"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="message2" className="lebel">
                        Message (if any) <span style={{ color: "red" }}>*</span>
            </label>
                    <input
                        type="text"
                        className="txt-fld w-input"
                        maxLength={256}
                        name="message2"
                        onChange={handleInput}
                        required
                        id="message2"
                    />

                    <input
                        type="submit"
                        defaultValue="SUBMIT"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
                        value={`Submit`}
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

export default InterviewerForm
