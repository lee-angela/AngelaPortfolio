import styled from "@emotion/styled";


export default function FilterPill ({
    id,
    currState,
    callbackFunc,
    displayText,
    className
}) {
    function handleClick() {
        callbackFunc(!currState);
    }

    return (
        <Pill 
            onClick={handleClick}
            className={className}>
            {displayText}
        </Pill>
    );
}

const Pill = styled.div`
    font-family: 'Space Mono', monospace;
    border-radius:20px;
    display:inline-block;
    padding:5px 25px;
    margin:10px 20px 10px 0;
    border:2px solid black;
    box-sizing: border-box;
    transition: all 0.1s ease 0s;
    :hover {
        cursor:pointer;
        background-color:#FFAF52;
        border:2px solid #FFAF52;
        transition: all 0.1s ease 0s;
    }
`;