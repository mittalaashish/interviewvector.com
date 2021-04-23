import React from 'react'
import Container from '@material-ui/core/Container';


const FormContainer = () => {
    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "space-between", height: "500px" }}>
                <div>
                    <h1>Dont be shy say hi</h1>
                </div>
                <div>
                    <form>
                        <input type="text" />
                    </form>
                </div>
            </div>
        </Container>

    )
}

export default FormContainer
