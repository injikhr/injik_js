import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedinAtom } from "../atoms";
//import Map from "../Components/Map";
import KAKAO from "../img/KAKAO.png";

const Entire = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 1000px;
    height: 100vh;
    background-color: ${(props) => props.theme.white1};
`;

const Main = styled.div`
    min-width: 750px;
    width: 40%;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    margin: 50px auto;
`;

const MainBack = styled.section`
    height: 50px;
`;

const MainBackButton = styled.button`
    background-color: transparent ;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;

const MainHeader = styled.header`
    display: flex;
    justify-content: center;
    height: 50px;
`;

const MainHeaderName = styled.span`
    padding: 0 15px;
    font-size: 35px;
    font-weight: bold;
    border-bottom: 6px ridge ${(props) => props.theme.skyblue};
`;

const MainCondition = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
`;

const MainConditionUl = styled.ul`
    margin-left: 20px;
`;

const MainConditionLi = styled.li`
    font-size: 17px;
    font-weight: 600;
    margin: 10px 5px;
    color: #666666;
`;

const MainStoryArea = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainStoryStory = styled.article`
    width: 95%;
    height: 95%;
    border: 1px solid ${(props) => props.theme.lightgray};
`;

const MainWorkingArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    
`;

const MainEmplorerInfo = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainEmplorerInfoUl = styled.ul`
    margin-left: 20px;
`;


const MainBottom = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

`;

const MainEmplorerInfoLi = styled(MainConditionLi)`
    font-size:16px;
`;

const MainBottomButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #45aaf2;
    border: 0;
    font-size: 18px;
    color: #f5f6fa;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`;

function PostInfo() {
    const navigate = useNavigate();
    const params = useParams();
    const isLoggedin = useRecoilValue(isLoggedinAtom);

    useEffect(() => {
        if(!isLoggedin) {
            alert("로그인이 필요합니다");
            navigate("/Signin");
        }
    },[]);    

    const returnClick = () => {
        navigate("/");
    }

    const ApplyClick = () => {
        alert("지원되었습니다.");
    }

    return (
        <Entire>
            <Main>
                <MainBack>
                    <MainBackButton
                    onClick={returnClick}>❌</MainBackButton>
                </MainBack>
                <MainHeader>
                    <MainHeaderName>
                        KAKAO
                    </MainHeaderName>
                </MainHeader>
                <MainCondition>
                    <MainConditionUl>
                        <MainConditionLi>
                            근무형태: 채용
                        </MainConditionLi>
                        <MainConditionLi>
                            근무기간: 10년
                        </MainConditionLi>
                        <MainConditionLi>
                            근무요일,시간: 평일, 09:00 ~ 17:00
                        </MainConditionLi>
                        <MainConditionLi>
                            급여: 급여협의
                        </MainConditionLi>
                    </MainConditionUl>
                </MainCondition>
                <MainStoryArea>
                    <MainStoryStory>
                        <img
                        style={{width: "100%", objectFit: "scale-down"}}
                        src={KAKAO}
                        alt=""
                        >
                        </img>
                    </MainStoryStory>
                </MainStoryArea>
                {/* <MainWorkingArea>
            
                </MainWorkingArea> */}
                <MainEmplorerInfo>
                    <MainEmplorerInfoUl>
                        <MainEmplorerInfoLi>
                            채용담당자: 카카오
                        </MainEmplorerInfoLi>
                        <MainEmplorerInfoLi>
                            H.P: 010-3387-9513
                        </MainEmplorerInfoLi>
                        <MainEmplorerInfoLi>
                            Email: qo98333@naver.com
                        </MainEmplorerInfoLi>
                    </MainEmplorerInfoUl>
                </MainEmplorerInfo>
                <MainBottom>
                    <MainBottomButton onClick={ApplyClick}>
                        지원
                    </MainBottomButton>
                </MainBottom>
            </Main>
        </Entire>
    );
}

export default PostInfo;