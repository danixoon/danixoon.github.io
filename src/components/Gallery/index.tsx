import React, { useRef } from "react";

import { useDrag } from "react-use-gesture";

import Container from "../Container";

import "./Gallery.scss";

const { useSpring, animated, config, interpolate } = require("react-spring");

interface Props {
  sources: string[];
}

const Gallery: React.FC<Props> = props => {
  const { sources } = props;
  const Image = (props: { ref?: React.Ref<HTMLImageElement> } & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
    // <div>
    <img draggable={false} className="gallery-media" {...props} />
    // </div>
  );

  let dragging = false;

  const divRef = useRef<HTMLDivElement>();
  const [, setScroll] = useSpring(() => ({
    x: 0,
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
      clamp: true
      // duration: 100
      // duration: undefined
    },
    onFrame: (props: any) => {
      if (divRef.current) {
        const div = divRef.current;
        // console.log(props);
        div.scrollLeft = props.x;
      }
    }
  }));

  const bindImageDrag = useDrag(state => {
    const { xy, delta, offset } = state;
    if (divRef.current) {
      // const _x = interpolate([x], (x: any) => `${x}`);
      // console.log(_x);

      setScroll({ x: divRef.current.scrollLeft - delta[0] * 15, reset: state.first });
    }
    if (state.first) dragging = true;
    if (state.last) dragging = false;
  });

  const handleImageSelect = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // setScroll({ x: e.target., reset: true });
    const { current: div } = divRef;

    if (div && !dragging) {
      // const x = div.scrollLeft + (e.currentTarget.x - div.offsetLeft) - div.clientWidth / 2 + 125 / 2;
      const x = div.scrollLeft + e.currentTarget.x - div.clientWidth / 2 + e.currentTarget.width / 2 - div.offsetLeft;
      console.log(x);
      setScroll({ x });
    }
  };

  return (
    // <Container>
    <div ref={c => (divRef.current = c as HTMLDivElement)} className="gallery">
      {sources.map((s, i) => (
        <Image /* onClick={handleImageSelect}*/ src={s} key={i} {...bindImageDrag()} />
      ))}
    </div>
    // </Container>
  );
};

export default Gallery;
