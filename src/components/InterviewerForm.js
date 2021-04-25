import React from 'react'
import Grid from '@material-ui/core/Grid';

const InterviewerForm = ({ handleInput, handleForm, data }) => {
    return (
        <form name="interviewer" id="interviewer" data-netlify="true" method="POST" onSubmit={handleForm}>
            <Grid container className="contact-form" spacing={2}>
                <Grid item xs={12}>
                    <input type="hidden" name="form-name" value="interviewer" />
                    <label htmlFor="name" className="label">
                      Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="interviewer_name"
                        onChange={handleInput}
                        id="interviewer_name"
                        value={data.interviewer_name}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Year of Graduation <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="text"
                        className="text-field-3 w-input"
                        maxLength={256}
                        name="year_of_graduation"
                        onChange={handleInput}
                        id="year_of_graduation"
                        value={data.year_of_graduation}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Current Employer <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="text"
                        className="text-field-4 w-input"
                        maxLength={256}
                        name="current_employer"
                        onChange={handleInput}
                        id="current_employer"
                        value={data.current_employer}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Email ID <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="email"
                        className="text-field-3 w-input"
                        maxLength={256}
                        name="email"
                        onChange={handleInput}
                        id="interviewer_email"
                        value={data.email}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Contact Number <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="tel"
                        className="text-field-4 w-input"
                        maxLength={256}
                        name="contact"
                        onChange={handleInput}
                        id="interviewer_contact"
                        value={data.contact}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <label htmlFor="email" className="label">
                        LinkedIn profile link <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="linkedin_profile"
                        onChange={handleInput}
                        id="linked_profile"
                        value={data.linkedin_profile}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <label htmlFor="message2" className="label">
                        Message (if any) <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="txt-fld w-input"
                        maxLength={256}
                        name="message2"
                        onChange={handleInput}
                        value={data.message2}
                        required
                        id="message2"
                    />
                </Grid>

                <Grid item xs={12}>
                    <input
                        type="submit"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
                        value={`Submit`}
                    />
                </Grid>
            </Grid>
        </form>
    )
};

export default InterviewerForm;
