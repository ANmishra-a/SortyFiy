import LinkList from "./Linked_List";
import "./ResultBox.css";

function ResultBox({ sortResult, longResult }) {
  return (
    <div className="result-container">
      <LinkList sortResult={sortResult} longResult={longResult} />
    </div>
  );
}
export default ResultBox;
