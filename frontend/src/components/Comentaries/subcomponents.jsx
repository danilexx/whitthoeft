import {
  StarsContainer,
  CommentContainer,
  CommentPhoto,
  CommentInfo,
  CommentLabel,
  UserName,
} from "./styles";
import { Star } from "./icons";

export const StarRater = ({ stars, editable = false }) => {
  const [currentRating, setCurrentRating] = React.useState(stars || 0);

  return (
    <StarsContainer>
      {[...Array(5)].map((e, index) => (
        <Star
          editable={editable}
          onClick={() => editable && setCurrentRating(index + 1)}
          key={index}
          isFull={index + 1 <= currentRating}
        />
      ))}
    </StarsContainer>
  );
};

export const Comment = ({ stars, user, photo, comment }) => (
  <CommentContainer>
    <CommentPhoto src={photo} />
    <CommentInfo>
      <UserName>{user}</UserName>
      <CommentLabel>{comment}</CommentLabel>
    </CommentInfo>
    <StarRater stars={stars} />
  </CommentContainer>
);
