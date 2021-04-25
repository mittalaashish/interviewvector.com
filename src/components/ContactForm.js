import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InterviewerForm from "./InterviewerForm";
import BusinessForm from "./BusinessForm";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default () => {
    const [interviewerForm, setInterviewerForm] = useState(false)
    const [message,setMessage] = useState('')
    const [interviewerState, setInterviewerState] = React.useState({type:"Interviewer",interviewer_name:"",year_of_graduation:"",current_employer:"",email:"",contact:"",linkedin_profile:"",message2:""})
    const interviewReset=()=>{
        setInterviewerState({type:"Interviewer",interviewer_name:"",year_of_graduation:"",current_employer:"",email:"",contact:"",linkedin_profile:"",message2:""})
    };
    const businessReset=()=>{
        setBusinessState({type:"Business",name:"",company:"",role:"",email:"",contact_number:"",learn:"",message:""})
    };
    const [businessState, setBusinessState] = React.useState({type:"Business",name:"",company:"",role:"",email:"",contact_number:"",learn:"",message:""})
    const handleInterViewerChange = (e) => {
        setMessage('');
        setInterviewerState({ ...interviewerState, [e.target.name]: e.target.value })
    };
    const handleBusinessChange = (e) => {
        setMessage('');
        setBusinessState({ ...businessState, [e.target.name]: e.target.value })
    };
    const handleBusinessSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...businessState,
            }),
        })
            .then(() => {
                setMessage("success")
                businessReset()
            })
            .catch((error) => {
                setMessage("fail")
            })
    };
    const handleInterviewerSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...interviewerState,
            }),
        })

            .then(() => {
                setMessage("success");
                interviewReset()
            })
            .catch((error) => {
                setMessage("fail")
            })
    };

    return (
        <div className="contact-section" id="form" >
            <Container>
                <Grid container className="contact-content" spacing={2}>
                    <Grid container item sm={12} md={6} className="contact-details">
                        <Grid item>
                            <h1 className="contact-headline">Don’t be shy</h1>
                            <h1 className="contact-subtext color">Say HELLO!</h1>
                        </Grid>
                        <div className="contact-description">
                            <p>To learn more or reach out to us - <br/> Simply drop us a note and our
                                team <br/> will contact you at the earliest.</p>

                            {
                                message ==="success" && (
                                    <div className="contact-form-message">
                                        <div>
                                            <img src="check.png"/>
                                        </div>
                                        <div >
                                            <p className="suc-message">
                                                Thank You for reaching out to us! <br/>
                                                Your submission has been recieved
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                message ==="fail" && (
                                    <div className="contact-form-message">
                                        <div>
                                            <img src="cross.png"/>
                                        </div>
                                        <div >
                                            <p className="fail-message">
                                                Sorry for inconvenience.<br/>
                                                Your form submission was unsuccessful!
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <Grid container className="contact-type">
                            <Grid
                                item
                                xs={6}
                                onClick={() => {
                                    setMessage("")
                                    setInterviewerForm(true)
                                }}
                                className={ `contact-type-option ${interviewerForm ? "selected" : ""}`}
                            >
                                <div className="option-text-1">I am an</div>
                                <h1 className="option-text-2">Interviewer</h1>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                onClick={() => {
                                    setMessage("");
                                    setInterviewerForm(false);
                                }}
                                className={ `contact-type-option ${interviewerForm ? "" : "selected"}`}
                            >
                                <div className="option-text-1">I am a</div>
                                <h1 className="option-text-2">Business</h1>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item sm={12} md={5} className="contact-form-wrapper">
                        {
                            interviewerForm ?
                                <InterviewerForm
                                    handleInput={handleInterViewerChange}
                                    handleForm={handleInterviewerSubmit}
                                    data={interviewerState}
                                /> :
                                <BusinessForm
                                    handleInput={handleBusinessChange}
                                    handleForm={handleBusinessSubmit}
                                    data={businessState}
                                />
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
