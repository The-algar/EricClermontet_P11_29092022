import styled from 'styled-components'

const TagList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    border-radius: 5px;
    color: white;
    font-size: 10px;
    font-weight: 500;
    Line-height: 14.26px;
    background-color: #ff6060;
    padding: 2.16px 20px;
    margin: 10px 10px 10px 0;
      @media screen and (min-width: 991px) {
        height: 25px;
        font-size: 14px;
        Line-height: 19.96px;              
        border-radius: 10px;
        padding: 2px 20px 0px 20px;
        margin: 20px 10px 0 0;
      }
`

function Tag({ tag }) {
    return <TagList>{tag}</TagList>;
}

export default Tag;
