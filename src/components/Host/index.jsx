import styled from 'styled-components'

const HostContainer = styled.div`
    display: flex;
    max-width: 135.5px;
    // align-content: center;
    // align-items: center;
    padding-top: 0;
      @media screen and (min-width: 991px){
        display: flex;
        // align-content: center;
        // align-items: center;
        max-width: 196px;
        padding-top: 24px;
    }
`
const HostName = styled.p`
    text-align: end;
    align-items: center;
    font-size: 12px;
    font-weight: 500
    // width: 93px;
    height: 33px;
    // padding-top: 6.5px;
    padding-right: 10.5px;
    margin:6px 0 0 0;
    @media screen and (min-width: 991px){
        align-content: center;
        font-size: 18px;
        // width: 93px;
        height: 52px;
        padding-right: 10px;
        // margin: 30px 10px 30px 0;
    }
`
const HostImage = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    // margin-bottom: 10px;
    // margin: 16.5px 0 30px;
    @media screen and (min-width: 991px){
        width: 64px;
        height: 64px;
        // margin: 24px 0;
    }
`

function Host({ hostName, hostImg }) {
    return (
        <HostContainer>
            <HostName>{hostName}</HostName>
            <HostImage src={hostImg} alt="" />
        </HostContainer>
    );
}

export default Host;
