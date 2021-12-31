const Placeholder = ({ w = 80, h = 80 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={w}
      height={h}
      radius={40}
      version="1.1"
    >
      <defs>
        <linearGradient id="g">
          <stop stopColor="#f8f8f8" offset="20%" />
          <stop stopColor="#f1f1f1" offset="50%" />
          <stop stopColor="#f8f8f8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="#f1f1f1" />
      <rect id="r" width={w} height={h} fill="url(#g)" />
      <animate
        xlinkHref="#r"
        attributeName="x"
        from={-w}
        to={w}
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>
  )
}

export default Placeholder
