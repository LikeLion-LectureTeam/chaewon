import logo from '../../images/logo.png';
// import './Footer.css';
import styled from 'styled-components';

const ElFooter = styled.footer`
    padding-bottom: 70px;
    font-family: Noto Sans KR;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
`;

const ElImgFooter = styled.img`
    width: 75px;
    margin: 0 auto 20px;
`;


export function Footer() {
    return(
        <ElFooter>
            <ElImgFooter src={logo} alt="like lion" />
            <p>&#8251; This service is under LikeLion.</p>
            <p className="txt-footer">Editing and reuse of this page is prohibited.</p>
        </ElFooter>

    )
}