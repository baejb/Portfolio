import styled from "styled-components";

const StyledTitle = styled.div`
    font-size: 1.5rem;
    text-align: center;
`;

const Title = ({title}) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
};

export default Title;

