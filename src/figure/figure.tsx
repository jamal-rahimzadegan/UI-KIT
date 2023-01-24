interface Props {
  imgSrc: string;
  caption: string;
}

export default function Figure(props: Props) {
  const { imgSrc, caption } = props;

  return (
    <figure>
      <img src={imgSrc} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}


<!-- Usage:  -->
<Figure
  imgSrc="https://cdn.soft98.ir/winrar.jpg"
  caption="Fig.1 Caption"
/>
