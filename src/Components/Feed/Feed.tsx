import React from "react";
import {
  FeedContainer,
  FeedNav,
  FeedNavFixed,
  FeedNavText,
  FeedTweetSection,
  FeedCard,
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
        <FeedCard></FeedCard>
      </FeedContainer>
    </>
  );
};

export default Feed;
