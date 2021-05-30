import React from "react";
import {
  ExploreContainer,
  Wrapper,
  ExploreWrapper,
  ExploreSearch,
  ExploreSearchButton,
  ExploreSearchInput,
  ExploreTrends,
  ExploreTrendsHead,
  ExploreTrendsHeadText,
  ExploreTrendsHeadIcon,
  ExploreTrendsItem,
  ExploreTrendsItemHead,
  ExploreTrendsItemTopic,
  ExploreTrendsItemTweetCounter,
} from "./Styled";
interface Props {}

const Explore = (props: Props) => {
  return (
    <ExploreContainer>
      <Wrapper>
        <ExploreWrapper>
          <ExploreSearch>
            <ExploreSearchButton
              src={
                "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiM0YTU5NjciPjxwYXRoIGQ9Ik03NC41MzMzMywxNy4yYy0zMS41OTY0MiwwIC01Ny4zMzMzMywyNS43MzY5MiAtNTcuMzMzMzMsNTcuMzMzMzNjMCwzMS41OTY0MiAyNS43MzY5Miw1Ny4zMzMzMyA1Ny4zMzMzMyw1Ny4zMzMzM2MxMy43Mzk5OCwwIDI2LjM1ODM0LC00Ljg3OTE1IDM2LjI0NzY2LC0xMi45NzgzOWwzNC4yMzIwMywzNC4yMzIwM2MxLjQzODAyLDEuNDk3NzggMy41NzM0LDIuMTAxMTMgNS41ODI2LDEuNTc3MzVjMi4wMDkyLC0wLjUyMzc4IDMuNTc4MjYsLTIuMDkyODQgNC4xMDIwNCwtNC4xMDIwNGMwLjUyMzc4LC0yLjAwOTIgLTAuMDc5NTcsLTQuMTQ0NTggLTEuNTc3MzUsLTUuNTgyNmwtMzQuMjMyMDMsLTM0LjIzMjAzYzguMDk5MjQsLTkuODg5MzIgMTIuOTc4MzksLTIyLjUwNzY4IDEyLjk3ODM5LC0zNi4yNDc2NmMwLC0zMS41OTY0MiAtMjUuNzM2OTIsLTU3LjMzMzMzIC01Ny4zMzMzMywtNTcuMzMzMzN6TTc0LjUzMzMzLDI4LjY2NjY3YzI1LjM5OTM3LDAgNDUuODY2NjcsMjAuNDY3MyA0NS44NjY2Nyw0NS44NjY2N2MwLDI1LjM5OTM3IC0yMC40NjcyOSw0NS44NjY2NyAtNDUuODY2NjcsNDUuODY2NjdjLTI1LjM5OTM3LDAgLTQ1Ljg2NjY3LC0yMC40NjcyOSAtNDUuODY2NjcsLTQ1Ljg2NjY3YzAsLTI1LjM5OTM3IDIwLjQ2NzMsLTQ1Ljg2NjY3IDQ1Ljg2NjY3LC00NS44NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              }
            />
            <ExploreSearchInput placeholder={"Search on Twitter"} />
          </ExploreSearch>
          <ExploreTrends>
            <ExploreTrendsHead>
              <ExploreTrendsHeadText>Trends for you</ExploreTrendsHeadText>
              <ExploreTrendsHeadIcon
                src={
                  "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiM1ZmMyZmYiPjxwYXRoIGQ9Ik03Ni4zODU0Nyw2Ljg4Yy0xLjY4Mzk5LDAuMDAwODkgLTMuMTE5ODQsMS4yMjA2NSAtMy4zOTI5NywyLjg4MjM0bC0zLjM0NTk0LDIwLjQ4NTQ3Yy00LjAyMzM3LDEuMTcwMzkgLTcuODU5ODksMi43NDk2MSAtMTEuNDc1NjMsNC43MTY1NmwtMTYuOTA0MzcsLTEyLjA3MzU5Yy0xLjM2NjYzLC0wLjk3NTg4IC0zLjIzODEyLC0wLjgyMjUzIC00LjQyNzY2LDAuMzYyODFsLTEzLjM4Mzc1LDEzLjM3MDMxYy0xLjE4MDYsMS4xODE0MyAtMS4zNDIxMSwzLjA0MDE1IC0wLjM4Mjk3LDQuNDA3NWwxMS44OTIxOSwxNy4wMTE4OGMtMS45OTcyOSwzLjYzNjg1IC0zLjYxMTQ5LDcuNDk0OTkgLTQuODEwNjIsMTEuNTU2MjVsLTIwLjM5ODEyLDMuMzkyOTdjLTEuNjU2MzYsMC4yNzg5OSAtMi44NjkxMSwxLjcxMzI4IC0yLjg2ODkxLDMuMzkyOTd2MTguOTJjLTAuMDAzMDMsMS42NjkwMSAxLjE5MjMxLDMuMDk5NDUgMi44MzUzMSwzLjM5Mjk3bDIwLjQxMTU2LDMuNjE0NjljMS4xOTI2Myw0LjA1NDIyIDIuNzk2NTcsNy45MTUwMiA0Ljc5NzE5LDExLjU1NjI1bC0xMi4wNCwxNi44NDM5MWMtMC45NzU4OCwxLjM2NjYzIC0wLjgyMjUzLDMuMjM4MTIgMC4zNjI4MSw0LjQyNzY1bDEzLjM3NzAzLDEzLjM4Mzc1YzEuMTc4NzMsMS4xNzkwNSAzLjAzMzIxLDEuMzQzMjcgNC40MDA3OCwwLjM4OTY5bDE3LjA0NTQ3LC0xMS45MzI1YzMuNjI2NCwxLjk3ODU4IDcuNDcyMzEsMy41Njk0IDExLjUwOTIyLDQuNzUwMTZsMy40MDY0LDIwLjUxMjM0YzAuMjc2MDcsMS42NTkwMyAxLjcxMTEzLDIuODc1MjggMy4zOTI5NywyLjg3NTYzaDE4LjkyYzEuNjcxMTQsMC4wMDI0NSAzLjEwMjM0LC0xLjE5NjM2IDMuMzkyOTcsLTIuODQyMDNsMy42NDgyOCwtMjAuNTkyOTdjNC4wMjAyNiwtMS4xOTg4NSA3Ljg0ODA4LC0yLjgxMzI0IDExLjQ1NTQ3LC00LjgwMzlsMTcuMTU5NjksMTIuMDRjMS4zNjczNSwwLjk1OTE0IDMuMjI2MDcsMC43OTc2NCA0LjQwNzUsLTAuMzgyOTdsMTMuMzc3MDMsLTEzLjM5MDQ3YzEuMTkwNjcsLTEuMTkzMjIgMS4zNDE0MywtMy4wNzM0IDAuMzU2MSwtNC40NDEwOWwtMTIuMjM0ODUsLTE2Ljk4NWMxLjk1NjI0LC0zLjU5MDExIDMuNTMyMjEsLTcuMzk1MDMgNC43MDMxMywtMTEuMzg4MjhsMjAuNzAwNDcsLTMuNjI4MTNjMS42NDU2NywtMC4yOTA2MyAyLjg0NDQ4LC0xLjcyMTgzIDIuODQyMDMsLTMuMzkyOTd2LTE4LjkyYy0wLjAwMDg5LC0xLjY4NCAtMS4yMjA2NSwtMy4xMTk4NCAtMi44ODIzNSwtMy4zOTI5N2wtMjAuNjY2ODcsLTMuMzc5NTNjLTEuMTc4NzYsLTMuOTg4NTIgLTIuNzU5MSwtNy43ODY2NCAtNC43MTY1NiwtMTEuMzc0ODRsMTIuMDY2ODcsLTE3LjE5MzI4YzAuOTU5MTQsLTEuMzY3MzUgMC43OTc2NCwtMy4yMjYwNyAtMC4zODI5NywtNC40MDc1bC0xMy4zODM3NSwtMTMuMzc3MDNjLTEuMTkzMjIsLTEuMTkwNjcgLTMuMDczNCwtMS4zNDE0MiAtNC40NDEwOSwtMC4zNTYwOWwtMTYuOTM3OTcsMTIuMTgxMDljLTMuNjA4ODQsLTEuOTgyNjggLTcuNDM5MTgsLTMuNTg4NTQgLTExLjQ2ODkxLC00Ljc3NzAzbC0zLjYwMTI1LC0yMC41ODYyNWMtMC4yODc3MywtMS42NDgzNCAtMS43MTk3LC0yLjg1MDYzIC0zLjM5Mjk3LC0yLjg0ODc1ek03OS4zMTQ4NSwxMy43NmgxMy4xMDE1NmwzLjQyNjU2LDE5LjU1ODI4YzAuMjMyOTUsMS4zNDAxOCAxLjIzMzY2LDIuNDE3MjcgMi41NTMxMywyLjc0Nzk3YzUuMDMxMDMsMS4yNTM3MyA5Ljc1NjE1LDMuMjQxMDggMTQuMDY5MDYsNS44NTIwM2MxLjE3ODcxLDAuNzE0MTggMi42Njk4OCwwLjY1NjAyIDMuNzg5MzgsLTAuMTQ3ODFsMTYuMDk4MTIsLTExLjU2OTY5bDkuMjY1MTYsOS4yNjUxNmwtMTEuNDYyMTksMTYuMzMzMjhjLTAuNzgyMTQsMS4xMTMxOSAtMC44MzQ4MSwyLjU4MjczIC0wLjEzNDM4LDMuNzQ5MDZjMi41ODUxMyw0LjMwMzE4IDQuNTQ1ODIsOC45OTg0NiA1Ljc5ODI4LDE0LjAwMTg3YzAuMzMzMzUsMS4zMzE4NiAxLjQyNjY1LDIuMzM4MDMgMi43ODE1NiwyLjU1OTg1bDE5LjYzMjE5LDMuMjExNTZ2MTMuMTAxNTZsLTE5LjY3MjUsMy40NTM0NGMtMS4zNDEyNiwwLjIzNzQyIC0yLjQxNjE1LDEuMjQzODIgLTIuNzQxMjUsMi41NjY1NmMtMS4yMzc5OCw0Ljk5NzA0IC0zLjE5OTg1LDkuNjkyMiAtNS43ODQ4NSwxMy45OTUxNWMtMC43MDkyNCwxLjE3ODQyIC0wLjY0ODQ3LDIuNjY2MDIgMC4xNTQ1MywzLjc4MjY1bDExLjYyMzQ0LDE2LjEzMTcybC05LjI2NTE1LDkuMjcxODhsLTE2LjMwNjQsLTExLjQ0MjAzYy0xLjExODkyLC0wLjc4Mzc1IC0yLjU5NTU2LC0wLjgzMTIyIC0zLjc2MjUsLTAuMTIwOTRjLTQuMjkxNDYsMi42MTA5MyAtOS4wMjE0NCw0LjYwNzY1IC0xNC4wMzU0Nyw1Ljg3ODljLTEuMzEyOTcsMC4zMzA5OCAtMi4zMDk2OSwxLjQwMTM0IC0yLjU0NjQxLDIuNzM0NTNsLTMuNDczNTksMTkuNTY1aC0xMy4xMjE3MmwtMy4yMzg0NCwtMTkuNDc3NjVjLTAuMjI1MjgsLTEuMzU0MTcgLTEuMjM0MDUsLTIuNDQ0OCAtMi41NjY1NiwtMi43NzQ4NWMtNS4wMzQwNCwtMS4yNDA3OCAtOS43ODA0LC0zLjIyNTE0IC0xNC4xMjI4MSwtNS44MzE4N2MtMS4xNjQ3LC0wLjY5NzUxIC0yLjYzMDY3LC0wLjY0NDg3IC0zLjc0MjM1LDAuMTM0MzdsLTE2LjE3ODc1LDExLjMzNDUzbC05LjI3MTg4LC05LjI4NTMxbDExLjQzNTMxLC0xNS45ODM5YzAuNzk4OCwtMS4xMTkzNyAwLjg1NDI4LC0yLjYwNjg5IDAuMTQxMSwtMy43ODI2NmMtMi42MzUxMSwtNC4zNTQxOSAtNC42MjgwMSwtOS4xMDAxNiAtNS44ODU2MywtMTQuMTU2NGMtMC4zMjg2OSwtMS4zMTU1OCAtMS4zOTk1MSwtMi4zMTUzNiAtMi43MzQ1MywtMi41NTMxMmwtMTkuMzcwMTYsLTMuNDR2LTEzLjEyMTcybDE5LjM1NjcyLC0zLjIxODI4YzEuMzUyMzMsLTAuMjI0MjYgMi40NDI0OCwtMS4yMjk5NSAyLjc3NDg0LC0yLjU1OTg1YzEuMjY4NDIsLTUuMDczNjcgMy4yNjAzNiwtOS44MTg4NSA1Ljg4NTYyLC0xNC4xNjMxM2MwLjcwNzM0LC0xLjE2NTMyIDAuNjU5OTEsLTIuNjM4MzggLTAuMTIwOTQsLTMuNzU1NzhsLTExLjMwMDk0LC0xNi4xNTE4N2w5LjI3ODYsLTkuMjcxODhsMTYuMDM3NjUsMTEuNDYyMTljMS4xMTUwMSwwLjc5NTA1IDIuNTk1MzcsMC44NTMxMSAzLjc2OTIyLDAuMTQ3ODFjNC4zMTk0NiwtMi41OTQyNiA5LjA3Njg0LC00LjU2MjY3IDE0LjExNjEsLTUuNzk4MjhjMS4zMzkwNywtMC4zMjk2OCAyLjM1MTg5LC0xLjQyNzExIDIuNTczMjgsLTIuNzg4Mjh6TTg2LDU4LjQ4Yy0xNS4xNTgxMywwIC0yNy41MiwxMi4zNjE4NyAtMjcuNTIsMjcuNTJjMCwxNS4xNTgxMyAxMi4zNjE4NywyNy41MiAyNy41MiwyNy41MmMxNS4xNTgxMywwIDI3LjUyLC0xMi4zNjE4NyAyNy41MiwtMjcuNTJjMCwtMTUuMTU4MTMgLTEyLjM2MTg3LC0yNy41MiAtMjcuNTIsLTI3LjUyek04Niw2NS4zNmMxMS40Mzk5LDAgMjAuNjQsOS4yMDAxIDIwLjY0LDIwLjY0YzAsMTEuNDM5OSAtOS4yMDAxLDIwLjY0IC0yMC42NCwyMC42NGMtMTEuNDM5OSwwIC0yMC42NCwtOS4yMDAxIC0yMC42NCwtMjAuNjRjMCwtMTEuNDM5OSA5LjIwMDEsLTIwLjY0IDIwLjY0LC0yMC42NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                }
              />
            </ExploreTrendsHead>
            <ExploreTrendsItem>
              <ExploreTrendsItemHead>sports -trend</ExploreTrendsItemHead>
              <ExploreTrendsItemTopic>UCL Final</ExploreTrendsItemTopic>
              <ExploreTrendsItemTweetCounter>
                299K Tweets
              </ExploreTrendsItemTweetCounter>
            </ExploreTrendsItem>
            <ExploreTrendsItem>
              <ExploreTrendsItemHead>sports -trend</ExploreTrendsItemHead>
              <ExploreTrendsItemTopic>UCL Final</ExploreTrendsItemTopic>
              <ExploreTrendsItemTweetCounter>
                299K Tweets
              </ExploreTrendsItemTweetCounter>
            </ExploreTrendsItem>
            <ExploreTrendsItem>
              <ExploreTrendsItemHead>sports -trend</ExploreTrendsItemHead>
              <ExploreTrendsItemTopic>UCL Final</ExploreTrendsItemTopic>
              <ExploreTrendsItemTweetCounter>
                299K Tweets
              </ExploreTrendsItemTweetCounter>
            </ExploreTrendsItem>
            <ExploreTrendsItem>
              <ExploreTrendsItemHead>sports -trend</ExploreTrendsItemHead>
              <ExploreTrendsItemTopic>UCL Final</ExploreTrendsItemTopic>
              <ExploreTrendsItemTweetCounter>
                299K Tweets
              </ExploreTrendsItemTweetCounter>
            </ExploreTrendsItem>
            <ExploreTrendsItem>
              <ExploreTrendsItemHead>sports -trend</ExploreTrendsItemHead>
              <ExploreTrendsItemTopic>UCL Final</ExploreTrendsItemTopic>
              <ExploreTrendsItemTweetCounter>
                299K Tweets
              </ExploreTrendsItemTweetCounter>
            </ExploreTrendsItem>
          </ExploreTrends>
        </ExploreWrapper>
      </Wrapper>
    </ExploreContainer>
  );
};

export default Explore;
