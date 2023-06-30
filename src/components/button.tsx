interface Props {
  text: string;
  handleClick: () => void;
}

export default function Button(props: Props) {
  /* function hanbleClick() {
    alert("Si le diste click")
   */
  return <button onClick={props.handleClick}>{props.text}</button>;
}
