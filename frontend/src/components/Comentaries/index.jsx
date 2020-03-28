import {
  Container,
  SendContainer,
  CommentField,
  SendButton,
  CommentsContainer,
} from "./styles";
// import Header from "!/Header";
import { StarRater, Comment } from "./subcomponents";
import { commentsSample } from "-/samples";
import Button from "../Button";

const Comentaries = () => (
  <>
    {/* <Header label="Comentarios" /> */}
    <Container>
      <CommentField />
      <SendContainer>
        <StarRater editable />
        <SendButton />
      </SendContainer>
      <CommentsContainer>
        {commentsSample.map(sample => (
          <Comment key={sample.id} {...sample} />
        ))}
      </CommentsContainer>
      <Button label="Carregar mais comentarios" />
    </Container>
  </>
);
export default Comentaries;
