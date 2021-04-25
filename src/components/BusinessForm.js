import React from 'react'
import Grid from '@material-ui/core/Grid';

const BusinessForm = ({handleInput,handleForm ,data}) => {
    return (
        <form name="business" id="business" data-netlify="true" method="POST" onSubmit={handleForm}>
            <Grid container className="contact-form" spacing={2}>

                <Grid item xs={12}>
                    <input type="hidden" name="form-name" value="business" />
                    <label htmlFor="name" className="label">
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
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Company <span style={{ color: "red" }}>*</span></label>
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
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Role <span style={{ color: "red" }}>*</span></label>
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
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Email ID <span style={{ color: "red" }}>*</span></label>
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
                </Grid>

                <Grid item xs={6}>
                    <label className="label">Contact Number <span style={{ color: "red" }}>*</span></label>
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
                </Grid>

                <Grid item xs={12}>
                    <label htmlFor="email" className="label">
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
                </Grid>

                <Grid item xs={12}>
                    <label htmlFor="message" className="label">
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
                </Grid>


                <Grid item xs={12}>
                    <input
                        type="submit"
                        defaultValue="SUBMIT"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default BusinessForm;
