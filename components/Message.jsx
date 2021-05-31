import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Message = ({ isFirstMessage, setIsFirstMessage, message }) => {
    return (
        <>
            <TypewriterMessage
                options={{
                    delay: 20
                }}
                onInit={(typewriter) => {
                    if (isFirstMessage) {
                        // Factor out timeout
                        setTimeout(() => {
                            typewriter.typeString(message)
                                .start();
                        }, 300)
                        setIsFirstMessage(false);
                    } else {
                        typewriter.typeString(message)
                            .start();
                    }
                }}
            />
        </>
    )
}

const TypewriterMessage = styled(Typewriter)`
    font-size: 6rem;
    
`

export default Message;

