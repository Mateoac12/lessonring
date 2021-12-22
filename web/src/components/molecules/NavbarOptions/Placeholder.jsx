import ContentLoader from "react-content-loader"

const Placeholder = (props) => (
  <article>

    <ContentLoader
      speed={2}
      width={540}
      height={40}
      viewBox="0 0 540 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="12" rx="0" ry="0" width="120" height="40" radius={8} />
      <rect x="140" y="12" rx="0" ry="0" width="120" height="40" radius={8} />
      <rect x="280" y="12" rx="0" ry="0" width="120" height="40" radius={8} />
      <rect x="420" y="12" rx="0" ry="0" width="120" height="40" radius={8} />
    </ContentLoader>
  </article>
)

export default Placeholder

