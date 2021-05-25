import React from "react";
import {
  FeedContainer,
  FeedNav,
  FeedNavFixed,
  FeedNavText,
  FeedTweetSection,
  FeedCard,
  FeedCardLogo,
  FeedCardSection,
  FeedCardLogoProfileIcon,
  FeedCardSectionUserData,
  FeedCardSectionUsername,
  FeedCardSectionUserTag,
  FeedCardSectionPostedTime,
  FeedCardSectionPost,
  FeedCardSectionPostText,
  FeedCardSectionPostAction,
  FeedCardSectionPostActionItem,
  FeedCardSectionPostActionItemIcon,
  FeedCardSectionPostActionItemText,
} from "./Styled";
interface Props {}

const Feed = (props: Props) => {
  return (
    <>
      <FeedContainer>
        <FeedNav>
          <FeedNavFixed>
            <FeedNavText>Home</FeedNavText>
          </FeedNavFixed>
        </FeedNav>
        <FeedTweetSection></FeedTweetSection>
        <FeedCard>
          <FeedCardLogo>
            <FeedCardLogoProfileIcon src="https://cdn.shopify.com/s/files/1/0173/8204/7844/articles/3_2ac523d0-8c20-4fd8-bfbd-0592d668b8da_1200x.jpg?v=1611161258" />
          </FeedCardLogo>
          <FeedCardSection>
            <FeedCardSectionUserData>
              <FeedCardSectionUsername>Elon Musk</FeedCardSectionUsername>
              <FeedCardSectionUserTag>@elonmusk</FeedCardSectionUserTag>
              <FeedCardSectionPostedTime> - 2d</FeedCardSectionPostedTime>
            </FeedCardSectionUserData>
            <FeedCardSectionPost>
              <FeedCardSectionPostText>
                İhtilafa dönüşme potansiyeli taşıyan temel tartışmalar(karbon
                salınımı, madencilik vb.) ve makro gelişmeler (Covid sonrası
                toparlanan ekonomi,
              </FeedCardSectionPostText>
              <FeedCardSectionPostAction>
                <FeedCardSectionPostActionItem>
                  <FeedCardSectionPostActionItemIcon
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwxMy45NzVjLTQzLjI5NTYyLDAgLTc4LjkwNSwzMC40ODk2OSAtNzguOTA1LDY4LjU4NWMwLDIyLjEwNDY5IDEyLjI1NSw0MS42MDI1IDMwLjc0NSw1NC4wNzI1Yy0wLjAyNjg3LDAuNzM5MDYgMCwxLjg4MTI1IC0wLjk2NzUsNS40ODI1Yy0xLjE5NTk0LDQuNDQ3ODEgLTMuNTYwOTQsMTAuNzUgLTguNDkyNSwxNy43Mzc1bC0zLjU0NzUsNC45NDVsNi4xMjc1LDAuMTA3NWMyMS4yNDQ2OSwwLjA5NDA2IDMzLjU1MzQ0LC0xMy44Njc1IDM1LjQ3NSwtMTYuMTI1YzYuMjc1MzEsMS4zOTc1IDEyLjgwNTk0LDIuMzY1IDE5LjU2NSwyLjM2NWM0My4yODIxOSwwIDc4LjkwNSwtMzAuNDg5NjkgNzguOTA1LC02OC41ODVjMCwtMzguMDk1MzEgLTM1LjYyMjgxLC02OC41ODUgLTc4LjkwNSwtNjguNTg1ek04NiwyMC40MjVjNDAuMjk5MDYsMCA3Mi40NTUsMjguMDQ0MDYgNzIuNDU1LDYyLjEzNWMwLDM0LjA5MDk0IC0zMi4xNTU5NCw2Mi4xMzUgLTcyLjQ1NSw2Mi4xMzVjLTYuODkzNDQsMCAtMTMuNTg1MzEsLTAuODMzMTIgLTE5Ljg4NzUsLTIuMzY1bC0xLjkzNSwtMC40M2wtMS4yOSwxLjYxMjVjMCwwIC05Ljk0Mzc1LDExLjIwNjg4IC0yNS44LDEzLjg2NzVjMi44NjIxOSwtNS4xMzMxMiA1LjAzOTA2LC05LjkwMzQ0IDYuMDIsLTEzLjU0NWMxLjM3MDYzLC01LjA5MjgxIDEuMzk3NSwtOC42IDEuMzk3NSwtOC42di0xLjcybC0xLjUwNSwtMC45Njc1Yy0xNy45NzkzNywtMTEuMzk1IC0yOS40NTUsLTI5LjU0OTA2IC0yOS40NTUsLTQ5Ljk4NzVjMCwtMzQuMDkwOTQgMzIuMTQyNSwtNjIuMTM1IDcyLjQ1NSwtNjIuMTM1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    }
                  />
                  <FeedCardSectionPostActionItemText>
                    5
                  </FeedCardSectionPostActionItemText>
                </FeedCardSectionPostActionItem>
                <FeedCardSectionPostActionItem>
                  <FeedCardSectionPostActionItemIcon
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0yOC42NjY2NywzNS44MzMzM2wtMjguNjY2NjcsMzUuODMzMzNoMjEuNXY0M2MwLDExLjg1MzY3IDkuNjQ2MzMsMjEuNSAyMS41LDIxLjVoODMuMTMwNTNsLTExLjQ2Mzg2LC0xNC4zMzMzM2gtNzEuNjY2NjdjLTMuOTQ4ODMsMCAtNy4xNjY2NywtMy4yMTA2NyAtNy4xNjY2NywtNy4xNjY2N3YtNDNoMjEuNXpNNDUuODY5NDcsMzUuODMzMzNsMTEuNDYzODcsMTQuMzMzMzNoNzEuNjY2NjdjMy45NDg4MywwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2Njd2NDNoLTIxLjVsMjguNjY2NjcsMzUuODMzMzNsMjguNjY2NjcsLTM1LjgzMzMzaC0yMS41di00M2MwLC0xMS44NTM2NyAtOS42NDYzMywtMjEuNSAtMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                    }
                  />
                </FeedCardSectionPostActionItem>
                <FeedCardSectionPostActionItem>
                  <FeedCardSectionPostActionItemIcon
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTguMjUsMjEuNWMtMjAuNzQ3NSwwIC0zMi4yNSwxNC45NzgzMyAtMzIuMjUsMTQuOTc4MzNjMCwwIC0xMS41MDI1LC0xNC45NzgzMyAtMzIuMjUsLTE0Ljk3ODMzYy0yMS43NzIzMywwIC0zOS40MTY2NywxNy42NDQzMyAtMzkuNDE2NjcsMzkuNDE2NjdjMCwyOS44OTIxNyAzNS4yMDI2Nyw1OC44NTk4MyA0NS4wMTM4Myw2OC4wMTE2N2MxMS4zMDE4MywxMC41MzUgMjYuNjUyODMsMjQuMDggMjYuNjUyODMsMjQuMDhjMCwwIDE1LjM1MSwtMTMuNTQ1IDI2LjY1MjgzLC0yNC4wOGM5LjgxMTE3LC05LjE1MTgzIDQ1LjAxMzgzLC0zOC4xMTk1IDQ1LjAxMzgzLC02OC4wMTE2N2MwLC0yMS43NzIzMyAtMTcuNjQ0MzMsLTM5LjQxNjY3IC0zOS40MTY2NywtMzkuNDE2Njd6TTEwNi4xNDU1LDExNS40NTVjLTEuMjY4NSwxLjE0NjY3IC0yLjM3MjE3LDIuMTQyODMgLTMuMjY4LDIuOTgxMzNjLTUuMzgyMTcsNS4wMTY2NyAtMTEuNzQ2MTcsMTAuNzcxNSAtMTYuODc3NSwxNS4zNzI1Yy01LjEzMTMzLC00LjYwMSAtMTEuNTAyNSwtMTAuMzYzIC0xNi44Nzc1LC0xNS4zNzI1Yy0wLjkwMywtMC44Mzg1IC0yLjAwNjY3LC0xLjg0MTgzIC0zLjI2OCwtMi45ODEzM2MtMTAuMTc2NjcsLTkuMTk0ODMgLTM3LjE4NzgzLC0zMy42MTg4MyAtMzcuMTg3ODMsLTU0LjUzODMzYzAsLTEzLjgzMTY3IDExLjI1MTY3LC0yNS4wODMzMyAyNS4wODMzMywtMjUuMDgzMzNjMTMuMDkzNSwwIDIwLjY4Myw5LjEzNzUgMjAuODgzNjcsOS4zNzRsMTEuMzY2MzMsMTIuMTI2bDExLjM2NjMzLC0xMi4xMjZjMC4wNzE2NywtMC4wOTMxNyA3Ljc5MDE3LC05LjM3NCAyMC44ODM2NywtOS4zNzRjMTMuODMxNjcsMCAyNS4wODMzMywxMS4yNTE2NyAyNS4wODMzMywyNS4wODMzM2MwLDIwLjkxOTUgLTI3LjAxMTE3LDQ1LjM0MzUgLTM3LjE4NzgzLDU0LjUzODMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    }
                  />
                  <FeedCardSectionPostActionItemText>
                    5
                  </FeedCardSectionPostActionItemText>
                </FeedCardSectionPostActionItem>
                <FeedCardSectionPostActionItem>
                  <FeedCardSectionPostActionItemIcon
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NS44OTUwMiwxNi4xMjVjLTEuODY0MTUsMC4wMjc4NyAtMy42NDQwNywwLjc4MTAyIC00Ljk2MjA3LDIuMDk5NjFsLTIxLjUsMjEuNWMtMS44NzIyMywxLjc5NzUyIC0yLjYyNjQxLDQuNDY2NzUgLTEuOTcxNjgsNi45NzgyNWMwLjY1NDcyLDIuNTExNSAyLjYxNjA1LDQuNDcyODIgNS4xMjc1NSw1LjEyNzU1YzIuNTExNSwwLjY1NDcyIDUuMTgwNzMsLTAuMDk5NDYgNi45NzgyNSwtMS45NzE2OGw5LjI2NjI4LC05LjI2NjI3djY2LjkwNzU1Yy0wLjAzNjU1LDIuNTg0NTYgMS4zMjEzNiw0Ljk4ODU4IDMuNTUzNzYsNi4yOTE1M2MyLjIzMjQsMS4zMDI5NSA0Ljk5MzQyLDEuMzAyOTUgNy4yMjU4MiwwYzIuMjMyNCwtMS4zMDI5NSAzLjU5MDMxLC0zLjcwNjk3IDMuNTUzNzYsLTYuMjkxNTN2LTY2LjkwNzU1bDkuMjY2MjgsOS4yNjYyN2MxLjc5NzUyLDEuODcyMjMgNC40NjY3NSwyLjYyNjQxIDYuOTc4MjUsMS45NzE2OGMyLjUxMTUsLTAuNjU0NzIgNC40NzI4MiwtMi42MTYwNSA1LjEyNzU1LC01LjEyNzU1YzAuNjU0NzIsLTIuNTExNSAtMC4wOTk0NiwtNS4xODA3MyAtMS45NzE2OCwtNi45NzgyNWwtMjEuNSwtMjEuNWMtMS4zNjk0NSwtMS4zNzAwMyAtMy4yMzUxMywtMi4xMjc0MSAtNS4xNzIwNCwtMi4wOTk2MXpNNTcuMzMzMzMsNjAuOTE2NjdjLTExLjc4OTI4LDAgLTIxLjUsOS43MTA3MiAtMjEuNSwyMS41djUzLjc1YzAsMTEuNzg5MjggOS43MTA3MiwyMS41IDIxLjUsMjEuNWg1Ny4zMzMzM2MxMS43ODkyOCwwIDIxLjUsLTkuNzEwNzIgMjEuNSwtMjEuNXYtNTMuNzVjMCwtMTEuNzg5MjggLTkuNzEwNzIsLTIxLjUgLTIxLjUsLTIxLjVoLTMuNTgzMzNjLTIuNTg0NTYsLTAuMDM2NTUgLTQuOTg4NTgsMS4zMjEzNiAtNi4yOTE1MywzLjU1Mzc2Yy0xLjMwMjk1LDIuMjMyNCAtMS4zMDI5NSw0Ljk5MzQyIDAsNy4yMjU4MmMxLjMwMjk1LDIuMjMyNCAzLjcwNjk3LDMuNTkwMzEgNi4yOTE1MywzLjU1Mzc2aDMuNTgzMzNjNC4wNDE4OSwwIDcuMTY2NjcsMy4xMjQ3OCA3LjE2NjY3LDcuMTY2Njd2NTMuNzVjMCw0LjA0MTg5IC0zLjEyNDc4LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N2gtNTcuMzMzMzNjLTQuMDQxODksMCAtNy4xNjY2NywtMy4xMjQ3OCAtNy4xNjY2NywtNy4xNjY2N3YtNTMuNzVjMCwtNC4wNDE4OSAzLjEyNDc4LC03LjE2NjY3IDcuMTY2NjcsLTcuMTY2NjdoMy41ODMzM2MyLjU4NDU2LDAuMDM2NTUgNC45ODg1OCwtMS4zMjEzNiA2LjI5MTUzLC0zLjU1Mzc2YzEuMzAyOTUsLTIuMjMyNCAxLjMwMjk1LC00Ljk5MzQyIDAsLTcuMjI1ODJjLTEuMzAyOTUsLTIuMjMyNCAtMy43MDY5NywtMy41OTAzMSAtNi4yOTE1MywtMy41NTM3NnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                    }
                  />
                </FeedCardSectionPostActionItem>
              </FeedCardSectionPostAction>
            </FeedCardSectionPost>
          </FeedCardSection>
        </FeedCard>
      </FeedContainer>
    </>
  );
};

export default Feed;
