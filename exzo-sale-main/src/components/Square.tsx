interface Square {
    x: number;
    y: number;
  }
  
  export const Square: React.FC<Square> = ({ x, y }) => {
    return (
      <rect
        x={x}
        y={y}
        width={1}
        height={1}
        fill="black"
      />
    );
  };
  